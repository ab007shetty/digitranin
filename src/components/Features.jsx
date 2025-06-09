import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLock, FaChartLine, FaLightbulb } from "react-icons/fa";

const FEATURES = [
  {
    icon: <FaRocket className="text-pink-600 text-3xl mb-2" />,
    title: "Instant Results",
    desc: "Upload & get insights in seconds.",
  },
  {
    icon: <FaLock className="text-pink-600 text-3xl mb-2" />,
    title: "Data Privacy",
    desc: "Your data is never stored, always secure.",
  },
  {
    icon: <FaLightbulb className="text-pink-600 text-3xl mb-2" />,
    title: "Innovation",
    desc: "Continuous R&D to deliver impactful technology.",
  },
  {
    icon: <FaChartLine className="text-pink-600 text-3xl mb-2" />,
    title: "Actionable Analytics",
    desc: "Clear visualizations and smart recommendations.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gradient-to-br from-white via-blue-50 to-pink-50 py-12 border-y border-gray-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-2">
        {FEATURES.map(({ icon, title, desc }, idx) => (
          <motion.div
            key={title}
            className="bg-white border border-pink-100 rounded-xl shadow-glossy p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {icon}
            <div className="text-pink-900 font-bold text-lg mb-1">{title}</div>
            <div className="text-gray-600 text-base">{desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}