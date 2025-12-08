import { Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 min-h-[400px] sm:min-h-[500px] md:h-[600px] py-8 sm:py-10 md:py-0 bg-gradient-to-b from-black via-[#a542009f] to-[#ca5201] overflow-hidden relative">
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-sm:flex  max-sm:items-center max-sm:justify-center">
            {/* Left column - Brand */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 3l8 8-8 8V3zm10 0l8 8-8 8V3z" />
                </svg>
                <span className="text-lg sm:text-xl font-semibold text-white font-bitcount">
                  Tecway
                </span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                Tecway is a tech agency that specializes in finding and creating
                tech solutions
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/t3cway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Middle column - Navigation */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-white font-medium text-sm sm:text-base">
                {"{Navigation}"}
              </h3>
              <nav className="flex flex-col gap-2 sm:gap-3">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  work
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right column - Legals */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-white font-medium text-sm sm:text-base">
                {"{Legals}"}
              </h3>
              <nav className="flex flex-col gap-2 sm:gap-3">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Terms of service
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="relative z-10 w-full flex items-center justify-center pointer-events-none -mt-8 sm:-mt-12 md:-mt-16">
        <h1 className="text-[6rem] sm:text-[10rem] md:text-[16rem] lg:text-[20rem] font-bold text-[#a0826d] opacity-40 select-none leading-none font-bitcount">
          Tecway
        </h1>
      </div>

      {/* Copyright */}
      <div className="relative z-10 w-full flex justify-center px-4 sm:px-6 md:px-8 mt-4 sm:mt-6 md:mt-0">
        <p className="text-white text-xs sm:text-sm">© 2025, <span className="font-bitcount">Tecway</span>.</p>
      </div>
    </footer>
  );
};

export default Footer;
