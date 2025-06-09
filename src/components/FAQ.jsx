import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQS = [
  {
    q: "What makes DigiTran Technologies different?",
    a: "We combine global expertise, innovative thinking, and a results-driven approach to craft solutions that solve real business challenges."
  },
  {
    q: "Where are you located?",
    a: "Our offices are in Manipal, India and Minneapolis, USA. We serve clients worldwide."
  },
  {
    q: "What industries do you specialize in?",
    a: "We excel in SaaS, e-commerce, logistics, automation, and digital transformation for startups, SMBs, and enterprises."
  },
  {
    q: "Can you help migrate my legacy systems?",
    a: "Absolutely. We have deep experience modernizing and integrating legacy platforms with new, scalable solutions."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-gradient-to-br from-pink-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-white rounded-xl shadow-glossy">
              <button
                className="w-full flex justify-between items-center p-5 text-lg font-semibold text-blue-800 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <FaChevronDown className={`ml-2 transform transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-700 text-base">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}