"use client";
import { useEffect, useRef, useState } from "react"


const ResultCard = ({ value, suffix = "+", title, description}) => {

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const easeOutCubic = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const duration = 1000; // 1 second
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Apply easing to progress
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.round(easedProgress * value);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <div
      ref={cardRef}
      className="bg-[#0C0C0D] p-8 md:p-10 rounded-2xl border-t-4 border-orange-500"
    >
      <div className="text-4xl md:text-5xl font-light mb-6">
        {count} {suffix}
      </div>
      <h3 className="text-lg font-normal mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ResultCard;
