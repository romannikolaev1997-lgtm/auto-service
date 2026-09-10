"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animation";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={sectionRef} className="relative bg-black py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent" />
      <motion.div className="relative max-w-3xl mx-auto text-center" initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-6" variants={fadeInUp} custom={0}>
          Готовы к <span className="text-yellow-400">качественному</span> обслуживанию?
        </motion.h2>
        <motion.p className="text-gray-400 text-lg mb-10" variants={fadeInUp} custom={1}>
          Оставьте заявку и мы перезвоним вам в течение 15 минут для уточнения деталей
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp} custom={2}>
          <input type="text" placeholder="Ваше имя" className="bg-gray-900 border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors" aria-label="Ваше имя" />
          <input type="tel" placeholder="Номер телефона" className="bg-gray-900 border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors" aria-label="Номер телефона" />
          <motion.button
            className="relative overflow-hidden bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold whitespace-nowrap shadow-lg shadow-yellow-400/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              const btn = e.currentTarget;
              const ripple = document.createElement("span");
              const rect = btn.getBoundingClientRect();
              const size = Math.max(rect.width, rect.height);
              ripple.style.cssText = "position:absolute;border-radius:50%;background:rgba(0,0,0,0.2);width:" + size + "px;height:" + size + "px;left:" + (e.clientX - rect.left - size / 2) + "px;top:" + (e.clientY - rect.top - size / 2) + "px;animation:ripple 0.6s ease-out;pointer-events:none";
              btn.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
          >
            Записаться
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}