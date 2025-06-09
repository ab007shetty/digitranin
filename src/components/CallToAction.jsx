import React from "react";
import { FaCommentDots } from "react-icons/fa";

export default function CallToAction() {
  return (
    <a
      href="#contact"
      className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-blue-700 to-pink-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition"
      style={{ boxShadow: "0 4px 24px 0 rgba(60,90,255,0.12)" }}
    >
      <FaCommentDots className="text-xl" />
      <span className="font-semibold">Contact Us</span>
    </a>
  );
}