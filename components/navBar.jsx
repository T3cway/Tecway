"use client";
import { Button } from "@/components/ui/button";
import { Menu, Headphones, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        // Always show navbar at the top
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "/projects" },
    { label: "Book A Call", href: "/#book-call" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-transparent transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Tecway.png"
                alt="Tecway Logo"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
              <span className="text-xl font-semibold text-white font-bitcount">Tecway</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 relative z-50">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-white cursor-pointer bg-[#FE5A1F] hover:text-white hover:bg-[#fe5a1fd5] transition-colors z-50"
            >
              <span className="text-sm font-medium text-white">Menu</span>
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-12 right-0 w-56 bg-black border border-white/20 rounded-xl shadow-xl z-50 overflow-hidden">
                <nav className="">
                  {menuItems.map((item, index) =>
                    item.href.startsWith("#") ? (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-6 py-3 text-white hover:bg-[#FE5A1F] transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-6 py-3 text-white hover:bg-[#FE5A1F] transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            )}

            {/* Call Button */}
            {/* <Button
              size="icon"
              className="bg-[#FE5A1F] hover:bg-primary/90 text-white rounded-xl"
            >
              <Headphones className="w-5 h-5" />
            </Button> */}
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;
