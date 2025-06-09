import React from "react";
import { motion } from "framer-motion";

const WORKS = [
  {
    title: "E-Commerce Platform",
    img: "/work1.jpg",
    desc: "End-to-end custom e-commerce marketplace with scalable cloud backend.",
  },
  {
    title: "SaaS Dashboard",
    img: "/work2.jpg",
    desc: "Multi-tenant SaaS analytics platform with real-time insights.",
  },
  {
    title: "Logistics Automation",
    img: "/work3.jpg",
    desc: "Fleet tracking and route optimization for logistics providers.",
  },
  {
    title: "Mobile Banking App",
    img: "/work4.jpg",
    desc: "Cross-platform banking app with biometric security and instant payments.",
  },
  {
    title: "Healthcare Portal",
    img: "/work5.jpg",
    desc: "Patient engagement and telemedicine platform for clinics and hospitals.",
  },
  {
    title: "EdTech Solution",
    img: "/work6.jpg",
    desc: "Interactive online learning management system for universities.",
  },
  {
    title: "Retail Analytics",
    img: "/work7.jpg",
    desc: "AI-driven in-store analytics for retail performance optimization.",
  },
  {
    title: "Smart Home IoT",
    img: "/work8.jpg",
    desc: "Unified control dashboard for smart home devices.",
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="py-20 bg-gradient-to-br from-white via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Showcase</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {WORKS.map((work, idx) => (
            <motion.div
              key={work.title}
              className="group bg-white/90 rounded-2xl shadow-glossy overflow-hidden flex flex-col items-center relative transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(60,90,255,0.18)" }}
              whileTap={{ scale: 0.98 }}
              tabIndex={0}
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
              <div className="p-5 flex flex-col flex-1 w-full">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{work.title}</h3>
                <p className="text-gray-600 text-sm">{work.desc}</p>
              </div>
              {/* Overlay button, shown on hover/touch */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 rounded-2xl">
                <button className="bg-white/90 text-blue-800 px-4 py-2 rounded-lg font-bold shadow hover:bg-blue-700 hover:text-white transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}