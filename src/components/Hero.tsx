"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animation";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-black px-4 pt-20 sm:px-6">
      <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070)] bg-cover bg-center bg-scroll opacity-40 md:bg-fixed" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      <motion.div className="relative z-10 w-full max-w-3xl text-center" initial="hidden" animate="visible">
        <motion.h1 className="mb-6 text-[28px] font-bold leading-tight tracking-tight text-white min-[390px]:text-4xl sm:text-5xl md:text-7xl" variants={fadeInUp} custom={0}>
          Профессиональный <span className="text-yellow-400">автосервис</span>
        </motion.h1>
        <motion.p className="mb-8 text-base text-gray-300 sm:mb-10 sm:text-lg md:text-xl" variants={fadeInUp} custom={1}>
          Диагностика, ремонт и обслуживание автомобилей любых марок. Гарантия до 12 месяцев на выполненные работы.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-4 text-base font-bold text-black shadow-lg shadow-yellow-400/30 transition-colors hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto sm:px-10 sm:text-lg"
          variants={fadeInUp}
          custom={2}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Записаться на сервис
        </motion.a>
      </motion.div>
    </section>
  );
}
