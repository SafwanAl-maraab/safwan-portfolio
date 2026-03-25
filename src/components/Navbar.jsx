import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  // 🌙 حفظ الثيم
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // 🌍 اللغة
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "en"
  );

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // 🌙 تطبيق الثيم + حفظه
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // 🌍 اللغة + RTL
  useEffect(() => {
    localStorage.setItem("lang", lang);

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    window.dispatchEvent(new Event("languageChange"));
  }, [lang]);

  // 🧠 Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎯 Smooth scroll
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  // 🌍 النصوص
  const t = {
    en: ["Home", "About", "Projects", "Contact"],
    ar: ["الرئيسية", "من أنا", "المشاريع", "التواصل"],
  };

  const links = [
    { name: t[lang][0], id: "home" },
    { name: t[lang][1], id: "about" },
    { name: t[lang][2], id: "projects" },
    { name: t[lang][3], id: "contact" },
  ];

  return (
    <>
      {/* 🔝 Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-black/70 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="font-extrabold text-xl md:text-2xl text-black dark:text-white">
            Safwan
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollTo(link.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">

            {/* 🌍 Language */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:scale-105 transition"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>

            {/* 🌙 Dark */}
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full text-sm hover:scale-105 transition"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {/* Mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-xl text-black dark:text-white"
            >
              ☰
            </button>

          </div>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-black z-40 flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollTo(link.id)}
                className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-500"
              >
                {link.name}
              </button>
            ))}

            <div className="flex gap-4 mt-6">

              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="px-4 py-2 bg-blue-600 text-white rounded-full"
              >
                {lang === "en" ? "AR" : "EN"}
              </button>

              <button
                onClick={() => setDark(!dark)}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full"
              >
                {dark ? "☀️" : "🌙"}
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}