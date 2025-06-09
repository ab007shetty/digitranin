import React from "react";
import { FaLightbulb, FaDraftingCompass, FaCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const STEPS = [
  {
    icon: <FaLightbulb className="text-blue-700 text-2xl" />,
    title: "Discovery & Strategy",
    desc: "We listen, analyze, and strategize to solve your unique business challenges.",
  },
  {
    icon: <FaDraftingCompass className="text-blue-700 text-2xl" />,
    title: "Design & Prototype",
    desc: "Wireframes and interactive prototypes for seamless user experience.",
  },
  {
    icon: <FaCode className="text-blue-700 text-2xl" />,
    title: "Development",
    desc: "Agile, sprint-based builds using the best of modern tech.",
  },
  {
    icon: <FaRocket className="text-blue-700 text-2xl" />,
    title: "Launch & Support",
    desc: "Go-live, knowledge transfer, and ongoing optimization.",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">How We Work</h2>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center flex-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.18, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-50 border-2 border-blue-100 rounded-full p-5 mb-3">
                {step.icon}
              </div>
              <div className="font-bold text-blue-800 mb-1">{step.title}</div>
              <div className="text-gray-600">{step.desc}</div>
              {idx < STEPS.length - 1 && (
                <div className="hidden md:block h-1 w-full bg-gradient-to-r from-blue-200 to-pink-100 my-6 mx-2 rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}