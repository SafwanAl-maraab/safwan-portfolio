import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

export default function Hero() {

  // 🌍 اللغة من Navbar (نفس النظام)
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    const updateLang = () => {
      setLang(localStorage.getItem("lang") || "en");
    };

    window.addEventListener("languageChange", updateLang);

    return () => window.removeEventListener("languageChange", updateLang);
  }, []);

  // 🌍 Data
  const data = {
    en: {
      name: "Safwan Al-Maarab",
      title: "Full-Stack Developer | Laravel Specialist",
      desc: "I build powerful backend systems and modern web platforms.",
    },
    ar: {
      name: "صفوان المعرب",
      title: "مطور ويب متكامل | متخصص لارافيل",
      desc: "أبني أنظمة قوية ومنصات ويب حديثة باحترافية عالية.",
    },
  };

  const t = data[lang];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-white dark:bg-black text-black dark:text-white transition"
    >
      {/* 🌌 Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* 🧑 Avatar */}
      <motion.img
        src="/avatar.png"
        alt="avatar"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-blue-500 shadow-xl"
      />

      {/* 🧠 Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 max-w-3xl"
      >

        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
          {t.name}
        </h1>

        <p className="mt-4 text-blue-500 text-lg md:text-2xl">
          <Typewriter
            words={[
              t.title,
              "Backend Architecture Expert",
              "System Builder",
            ]}
            loop
            cursor
          />
        </p>

        <p className="mt-6 text-gray-700 dark:text-gray-300 text-base md:text-lg">
          {t.desc}
        </p>

      </motion.div>

      {/* 🔽 Scroll */}
      <div className="absolute bottom-6 animate-bounce text-gray-500 dark:text-gray-400">
        ↓
      </div>
    </section>
  );
}