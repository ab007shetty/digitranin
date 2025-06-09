import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-50 to-pink-50 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Let's Talk</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-8 mb-6 shadow-glossy">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-blue-700 mr-2" />
                <span className="font-bold text-blue-900">India Office:</span>
              </div>
              <div className="text-gray-700 ml-6">
                Innovative Minds<br />
                Devi Kripa, Manipal - 576104<br />
                Karnataka, India
              </div>
              <div className="flex items-center mt-2">
                <FaEnvelope className="text-blue-700 mr-2" />
                <a href="mailto:info@digitranin.com" className="text-blue-700 hover:underline">info@digitranin.com</a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-8 mb-6 shadow-glossy">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-pink-600 mr-2" />
                <span className="font-bold text-pink-900">USA Office:</span>
              </div>
              <div className="text-gray-700 ml-6">
                Innovative Minds<br />
                Minneapolis, MN, USA
              </div>
              <div className="flex items-center mt-2">
                <FaEnvelope className="text-pink-600 mr-2" />
                <a href="mailto:sales@digitranin.com" className="text-pink-700 hover:underline">sales@digitranin.com</a>
              </div>
              <div className="flex items-center mt-2">
                <FaPhone className="text-pink-600 mr-2" />
                <a href="tel:+16124450260" className="text-pink-700 hover:underline">+1 612 445 0260</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}