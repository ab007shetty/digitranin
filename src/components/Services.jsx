import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaRobot, FaDatabase, FaProjectDiagram, FaNetworkWired, FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: <FaLaptopCode className="text-blue-700 text-3xl mb-2" />,
    title: "Website Solutions",
    desc: "Beautiful, performant sites & platforms to present your business at its best.",
  },
  {
    icon: <FaMobileAlt className="text-blue-700 text-3xl mb-2" />,
    title: "Mobile Apps",
    desc: "iOS & Android apps, both native and cross-platform, with a focus on stellar UX.",
  },
  {
    icon: <FaPalette className="text-blue-700 text-3xl mb-2" />,
    title: "UI/UX Design",
    desc: "User-centric, research-driven design from wireframe to pixel-perfect visuals.",
  },
  {
    icon: <FaRobot className="text-blue-700 text-3xl mb-2" />,
    title: "Robotic Automation",
    desc: "RPA agents that automate repetitive tasks, boosting speed and accuracy.",
  },
  {
    icon: <FaDatabase className="text-blue-700 text-3xl mb-2" />,
    title: "Big Data & Analytics",
    desc: "Extracting insights from massive datasets to power your business decisions.",
  },
  {
    icon: <FaNetworkWired className="text-blue-700 text-3xl mb-2" />,
    title: "IoT Solutions",
    desc: "Connecting devices and automating data flows for modern, smart businesses.",
  },
  {
    icon: <FaMicrochip className="text-blue-700 text-3xl mb-2" />,
    title: "AI & Machine Learning",
    desc: "Augment your processes with custom AI and ML models.",
  },
  {
    icon: <FaProjectDiagram className="text-blue-700 text-3xl mb-2" />,
    title: "ERP & Digital Product Dev",
    desc: "Integrated business management and custom digital solutions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What We Do</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
          {SERVICES.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              className="bg-white/80 border shadow-glossy rounded-xl p-7 flex flex-col items-center text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {icon}
              <div className="text-blue-900 font-bold text-lg mb-1">{title}</div>
              <div className="text-gray-600 text-base">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}