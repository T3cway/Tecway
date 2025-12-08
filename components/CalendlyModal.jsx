"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CalendlyModal = ({ isOpen, onClose, url }) => {
  const modalRef = useRef(null);
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Load Calendly script when modal opens (only once)
    if (isOpen) {
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      
      const loadScript = () => {
        if (!existingScript) {
          const script = document.createElement("script");
          script.src = "https://assets.calendly.com/assets/external/widget.js";
          script.async = true;
          script.onload = () => {
            // Script loaded, widget should initialize automatically
            // Force a resize after a short delay to ensure proper rendering
            setTimeout(() => {
              if (window.Calendly && calendlyRef.current) {
                const iframe = calendlyRef.current.querySelector('iframe');
                if (iframe) {
                  iframe.style.height = '100%';
                  iframe.style.minHeight = '600px';
                  // Trigger a resize event
                  window.dispatchEvent(new Event('resize'));
                }
              }
            }, 300);
          };
          document.body.appendChild(script);
        } else {
          // Script already exists, just ensure sizing
          setTimeout(() => {
            if (calendlyRef.current) {
              const iframe = calendlyRef.current.querySelector('iframe');
              if (iframe) {
                iframe.style.height = '100%';
                iframe.style.minHeight = '600px';
                window.dispatchEvent(new Event('resize'));
              }
            }
          }, 300);
        }
      };

      // Small delay to ensure DOM is ready
      const timer = setTimeout(loadScript, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-0">
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl bg-[#0C0C0D] border border-white/20 rounded-xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        style={{ height: '85vh', maxHeight: '800px' }}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <h2 className="text-xl font-normal text-white">Book A Free Call</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-white/60 hover:text-white hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Calendly embed */}
        <div className="flex-1 overflow-auto" style={{ minHeight: '600px', height: '100%', position: 'relative' }}>
          <div
            ref={calendlyRef}
            className="calendly-inline-widget"
            data-url={url}
            style={{ 
              minWidth: "320px", 
              width: "100%",
              height: "100%",
              minHeight: "600px",
              position: "relative"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;

