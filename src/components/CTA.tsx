"use client";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/animation";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  return (
    <section id="contact" ref={sectionRef} className="relative bg-black py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent" />
      <motion.div className="relative max-w-3xl mx-auto text-center" initial={shouldReduceMotion ? false : "hidden"} animate={shouldReduceMotion || isInView ? "visible" : "hidden"}>
        <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-6" variants={fadeInUp} custom={0}>
          Готовы к <span className="text-yellow-400">качественному</span> обслуживанию?
        </motion.h2>
        <motion.p className="text-gray-400 text-lg mb-10" variants={fadeInUp} custom={1}>
          Оставьте заявку — в рабочее время мы свяжемся с вами в течение 30 минут.
        </motion.p>
        <motion.form
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
          custom={2}
          onSubmit={(event) => {
            event.preventDefault();
            setShowDemoNotice(true);
          }}
        >
          <input name="name" type="text" placeholder="Ваше имя" required className="bg-gray-900 border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors" aria-label="Ваше имя" />
          <input name="phone" type="tel" placeholder="Номер телефона" required className="bg-gray-900 border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors" aria-label="Номер телефона" />
          <motion.button
            type="submit"
            className="relative overflow-hidden bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold whitespace-nowrap shadow-lg shadow-yellow-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            onClick={(e) => {
              if (shouldReduceMotion) return;

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
        </motion.form>
        {showDemoNotice && <p className="mt-4 text-sm text-gray-400" role="status">Демо-форма: данные не отправляются.</p>}
      </motion.div>
    </section>
  );
}
