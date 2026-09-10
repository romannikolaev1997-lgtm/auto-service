"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" className={`text-xl font-bold text-white sm:text-2xl ${focusRing}`}>Auto<span className="text-yellow-400">Service</span></a>
        <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
          <a href="#services" className={`text-gray-300 hover:text-yellow-400 transition-colors text-sm uppercase tracking-wider ${focusRing}`}>Услуги</a>
          <a href="#contact" className={`text-gray-300 hover:text-yellow-400 transition-colors text-sm uppercase tracking-wider ${focusRing}`}>Контакты</a>
          <a href="tel:+79000000000" className={`text-white font-semibold ${focusRing}`}>+7 (900) 000-00-00</a>
        </nav>
        <button
          type="button"
          className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded text-white transition-colors hover:text-yellow-400 md:hidden ${focusRing}`}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">Меню</span>
          <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav id="mobile-navigation" aria-label="Основная навигация" className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <a href="#services" onClick={closeMenu} className="rounded px-3 py-3 text-sm uppercase tracking-wider text-gray-300 transition-colors hover:text-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">Услуги</a>
            <a href="#contact" onClick={closeMenu} className="rounded px-3 py-3 text-sm uppercase tracking-wider text-gray-300 transition-colors hover:text-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">Контакты</a>
            <a href="tel:+79000000000" className="rounded px-3 py-3 font-semibold text-white transition-colors hover:text-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">+7 (900) 000-00-00</a>
          </div>
        </nav>
      )}
      <motion.div className="h-0.5 bg-yellow-400 origin-left" style={{ scaleX }} />
    </header>
  );
}
