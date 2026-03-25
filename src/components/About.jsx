import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {

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
      title: "About Me",
      subtitle: "Backend-focused developer building real systems",
      desc: "I specialize in building scalable backend systems using Laravel and modern web technologies. I focus on performance, security and real-world solutions that businesses rely on.",
      stats: [
        { label: "Projects", value: "10+" },
        { label: "Systems Built", value: "5+" },
        { label: "Technologies", value: "15+" },
      ],
      highlights: [
        "Backend Architecture Design",
        "REST API Development",
        "Database Modeling",
        "System Scalability",
      ],
    },
    ar: {
      title: "من أنا",
      subtitle: "مطور متخصص في بناء الأنظمة الخلفية",
      desc: "متخصص في بناء الأنظمة باستخدام Laravel وتقنيات حديثة، مع التركيز على الأداء والأمان وتطوير حلول حقيقية للشركات.",
      stats: [
        { label: "المشاريع", value: "10+" },
        { label: "الأنظمة", value: "5+" },
        { label: "التقنيات", value: "15+" },
      ],
      highlights: [
        "تصميم الأنظمة الخلفية",
        "بناء API احترافي",
        "تصميم قواعد البيانات",
        "قابلية التوسع",
      ],
    },
  };

  const t = data[lang];

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-white dark:bg-black text-black dark:text-white overflow-hidden transition"
    >
      {/* 🔥 Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">
            {t.title}
          </h2>

          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">

          {/* 🧠 Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t.desc}
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {t.highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-white/10 text-sm hover:scale-105 transition"
                >
                  ✔️ {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 📊 Stats */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >

            {t.stats.map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-xl text-center"
              >
                <h3 className="text-3xl font-extrabold text-blue-500">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Extra */}
            <div className="col-span-2 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl text-center">
              <h3 className="text-xl font-bold">
                {lang === "en" ? "Always Learning 🚀" : "أتعلم باستمرار 🚀"}
              </h3>
              <p className="mt-2 text-sm">
                {lang === "en"
                  ? "Improving every day and building smarter systems."
                  : "أطور نفسي يوميًا وأبني أنظمة أكثر ذكاءً"}
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}