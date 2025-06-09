import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Process", href: "#process" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  // Removed Team and Blog
  { name: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <img src="/logo.png" alt="DigiTran Logo" className="h-24 w-auto" />
  );
}

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebarOpen]);

  return (
    <nav className="w-full border-b border-gray-100 shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-bold text-blue-900 tracking-tight select-none">DigiTran Technologies</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-700 font-medium px-3 py-2 rounded transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span className="sr-only">Open menu</span>
          <FaBars className="w-7 h-7 text-blue-800" />
        </button>
      </div>
      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          ></div>
          {/* Drawer */}
          <div className="fixed left-0 top-0 z-50 w-64 bg-white shadow-xl h-full flex flex-col p-6 animate-slide-in">
            <div className="flex items-center mb-8">
              <Logo />
              <span className="text-lg font-bold text-blue-900 ml-2">DigiTran</span>
              <button
                className="ml-auto text-gray-400 hover:text-blue-700"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-blue-700 text-base font-medium py-2"
                onClick={() => setSidebarOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-auto pt-10 text-blue-800 text-xs opacity-70">
              © {new Date().getFullYear()} DigiTran Technologies
            </div>
          </div>
        </>
      )}
      <style>{`
        .animate-slide-in {
          animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </nav>
  );
}