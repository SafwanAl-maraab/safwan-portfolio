import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Projects() {

  // 🌍 اللغة من Navbar
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
      title: "Featured Projects",
      desc: "Real systems built with performance, scalability and real-world usage.",
      btn: "View Project",
      projects: [
        {
          title: "Office & Travel System",
          desc: "Complete management platform for travel agencies including visas, bookings and operations.",
          tech: ["Laravel", "MySQL", "Tailwind"],
        },
        {
          title: "Decor Business Platform",
          desc: "Business workflow system to manage products, services and operations.",
          tech: ["Laravel", "Blade", "SQL"],
        },
        {
          title: "Arabic AI Chatbot",
          desc: "Experimental AI chatbot focused on Arabic language understanding and smart responses.",
          tech: ["AI", "JavaScript", "API"],
        },
      ],
    },
    ar: {
      title: "أبرز المشاريع",
      desc: "أنظمة حقيقية مبنية باحترافية وقابلة للتوسع.",
      btn: "عرض المشروع",
      projects: [
        {
          title: "نظام مكاتب السفر",
          desc: "منصة متكاملة لإدارة التأشيرات والحجوزات والعملاء.",
          tech: ["Laravel", "MySQL", "Tailwind"],
        },
        {
          title: "منصة إدارة الديكور",
          desc: "نظام لإدارة المنتجات والخدمات داخل الشركة.",
          tech: ["Laravel", "Blade", "SQL"],
        },
        {
          title: "بوت ذكاء صناعي عربي",
          desc: "منصة محادثة ذكية تدعم اللغة العربية.",
          tech: ["AI", "JavaScript", "API"],
        },
      ],
    },
  };

  const t = data[lang];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-white dark:bg-black text-black dark:text-white overflow-hidden transition"
    >
      {/* 🔥 Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-150px] right-[-150px] animate-pulse"></div>

      {/* 🧠 Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          {t.title}
        </motion.h2>

        <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          {t.desc}
        </p>

      </div>

      {/* 💎 Cards */}
      <div className="relative z-10 mt-16 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {t.projects.map((project, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
            className="group relative p-8 rounded-3xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden transition"
          >

            {/* Glow Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {project.desc}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-gray-200 dark:bg-white/10 rounded-full text-black dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Button */}
            <button  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
              {t.btn}
            </button>

          </motion.div>
        ))}

      </div>

      {/* 🎯 CTA */}
      <div className="relative z-10 mt-20 text-center">

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl text-gray-700 dark:text-gray-300"
        >
          {lang === "en"
            ? "Let’s build something amazing together"
            : "دعنا نبني شيئًا رائعًا معًا"}
        </motion.h3>

        <a
          href="#contact"
          className="inline-block mt-6 px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 transition"
        >
          {lang === "en" ? "Start Now" : "ابدأ الآن"}
        </a>

      </div>

    </section>
  );
}