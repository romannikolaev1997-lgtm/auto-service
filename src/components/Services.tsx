"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { fadeInScale } from "@/lib/animation";

const services = [
  { icon: "🔍", title: "Диагностика", desc: "Компьютерная диагностика всех систем автомобиля на современном оборудовании." },
  { icon: "⚙️", title: "Техобслуживание", desc: "Полное ТО по регламенту с заменой масел, фильтров и расходников." },
  { icon: "🔧", title: "Ходовая часть", desc: "Ремонт подвески, тормозной системы, рулевого управления и сход-развал." },
  { icon: "🚗", title: "Кузовной ремонт", desc: "Восстановление геометрии, покраска и полировка кузовных элементов." },
  { icon: "⚡", title: "Двигатель", desc: "Капитальный ремонт двигателей, замена ГРМ и диагностика систем." },
  { icon: "🔌", title: "Электрика", desc: "Диагностика и ремонт электропроводки, генераторов, стартеров." },
];

function ServiceCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors duration-300"
      variants={fadeInScale}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion || isInView ? "visible" : "hidden"}
      custom={index}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Наши услуги</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Полный спектр услуг по обслуживанию и ремонту автомобилей в одном месте</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (<ServiceCard key={s.title} {...s} index={i} />))}
        </div>
      </div>
    </section>
  );
}
