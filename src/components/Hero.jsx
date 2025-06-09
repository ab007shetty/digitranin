import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center pt-28 pb-10 px-4 bg-white"
    >
      <motion.div
        className="flex-1 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow-xl">
          Transforming Ideas<br />
          <span className="text-blue-700">Into Digital Reality</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          World-class solutions for SaaS, e-commerce, logistics, automation, and more—crafted by a passionate team in Manipal & Minneapolis.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-3 rounded-lg font-semibold shadow transition"
          >
            Let's Talk
          </a>
          <a
            href="#services"
            className="text-blue-700 hover:underline text-lg px-3 py-3 font-medium"
          >
            What We Do
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1 }}
      >
        <img
          src="/hero-bg.jpg"
          alt="DigiTran Team"
          className="rounded-3xl shadow-2xl border-4 border-white w-[95%] max-w-lg object-cover"
        />
      </motion.div>
      {/* Shine effect */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.4 }}
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.8) 0%, rgba(200,225,255,0.2) 100%)",
        }}
      />
    </section>
  );
}