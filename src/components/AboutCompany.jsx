import React from "react";
import { motion } from "framer-motion";

export default function AboutCompany() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">About DigiTran</h3>
          <p className="text-gray-700 mb-3">
            DigiTran Technologies is a passionate team of engineers, designers, and visionaries. Our mission: to empower organizations to thrive in the digital era with cutting-edge software, automation, and analytics.
          </p>
          <p className="text-gray-700 mb-3">
            Based in Manipal, India & Minneapolis, USA, we blend global perspectives with deep local expertise. Our culture is built on honesty, learning, and relentless improvement.
          </p>
          <p className="text-gray-700">
            We help startups, SMBs, and enterprises automate, scale, and inspire. Let's build the future together!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/team1.jpg"
            alt="DigiTran team"
            className="rounded-xl w-full max-w-xs shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}