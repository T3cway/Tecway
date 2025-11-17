"use client";
import { Button } from "@/components/ui/button";
import { Menu, Headphones, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "#services" },
    { label: "Book A Call", href: "#solutions" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="relative z-50 px-6 py-6 border-b border-white/20">
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
              <span className="text-xl font-semibold text-white">Tecway</span>
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
