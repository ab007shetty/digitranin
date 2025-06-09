import React from "react";

const FOOTER_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Process", href: "#process" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
          {FOOTER_LINKS.map(link => (
            <a key={link.name} href={link.href} className="hover:underline hover:text-pink-400">
              {link.name}
            </a>
          ))}
        </div>
        <div className="text-gray-400 text-sm">© {new Date().getFullYear()} DigiTran Technologies</div>
      </div>
    </footer>
  );
}