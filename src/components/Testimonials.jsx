import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Hans Van",
    country: "USA",
    role: "Business Owner",
    text: "Approaching problem solving with a hands-on, user-centric mindset leads to innovation, a competitive advantage.",
    img: "/avatar1.jpg"
  },
  {
    name: "Marcel Smith",
    country: "UK",
    role: "Business Owner",
    text: "The DigiTran delivered two solutions that met all technical requirements and are being successfully used by customers.",
    img: "/avatar2.jpg"
  },
  {
    name: "Chris John",
    country: "USA",
    role: "Business Owner",
    text: "The team’s language skills, high-quality design work, and technical abilities have stood out as this partnership continues.",
    img: "/avatar3.jpg"
  }
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  function prev() {
    setIdx(i => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  }
  function next() {
    setIdx(i => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));
  }

  return (
    <section className="bg-blue-900 py-20" id="testimonials">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <div className="bg-white rounded-3xl shadow-xl px-8 py-10 w-full text-center relative">
          <img
            src={TESTIMONIALS[idx].img}
            alt={TESTIMONIALS[idx].name}
            className="w-16 h-16 rounded-full -mt-14 mx-auto border-4 border-blue-200 object-cover shadow"
          />
          <blockquote className="text-xl text-gray-800 font-medium mb-4 mt-4">
            “{TESTIMONIALS[idx].text}”
          </blockquote>
          <div className="text-blue-900 font-bold">{TESTIMONIALS[idx].name}</div>
          <div className="text-gray-500 text-sm">{TESTIMONIALS[idx].country}, {TESTIMONIALS[idx].role}</div>
          <button onClick={prev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-100 p-2 rounded-full text-blue-700 hover:bg-blue-200 transition">
            <FaChevronLeft />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-100 p-2 rounded-full text-blue-700 hover:bg-blue-200 transition">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}