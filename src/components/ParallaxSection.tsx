"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "15+", label: "Лет опыта" },
  { value: "5000+", label: "Клиентов" },
  { value: "100%", label: "Гарантия качества" },
  { value: "24/7", label: "Техподдержка" },
];

export default function ParallaxSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden bg-gray-950">
      <motion.div
        className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072)] bg-cover bg-center"
        style={{ y: bgY, opacity }}
      />
      <div className="absolute inset-0 bg-gray-950/85 backdrop-blur-sm" />
      <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          >
            <span className="text-5xl md:text-6xl font-black text-yellow-400 tabular-nums">{stat.value}</span>
            <span className="text-gray-300 text-sm uppercase tracking-widest">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}