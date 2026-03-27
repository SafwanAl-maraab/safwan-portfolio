تimport { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {

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
      title: "Contact Me",
      desc: "Let’s build something powerful together. Reach out anytime.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
    },
    ar: {
      title: "تواصل معي",
      desc: "دعنا نبني شيئًا قويًا معًا. تواصل معي في أي وقت.",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك",
      send: "إرسال",
      whatsapp: "واتساب",
      telegram: "تلجرام",
    },
  };

  const t = data[lang];

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-white dark:bg-black text-black dark:text-white overflow-hidden transition"
    >
      {/* 🔥 Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">
            {t.title}
          </h2>

          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            {t.desc}
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* 📩 Form */}
          <motion.form
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-3xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-xl space-y-6"
          >

            <input
              type="text"
              placeholder={t.name}
              className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 text-black dark:text-white outline-none"
            />

            <input
              type="email"
              placeholder={t.email}
              className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 text-black dark:text-white outline-none"
            />

            <textarea
              rows="5"
              placeholder={t.message}
              className="w-full p-4 rounded-xl bg-white dark:bg-gray-800 text-black dark:text-white outline-none"
            ></textarea>

            <button
              type="button"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition hover:scale-105"
            >
              {t.send}
            </button>

          </motion.form>

          {/* 📲 Links */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center gap-6"
          >

            {/* WhatsApp */}
            <a
              href="https://wa.me/967781101934"
              target="_blank"
              className="flex items-center justify-between p-6 rounded-2xl bg-green-500 text-white shadow-lg hover:scale-105 transition"
            >
              <span className="text-lg font-bold">{t.whatsapp}</span>
              <span>📞</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/StarWeb4"
              target="_blank"
              className="flex items-center justify-between p-6 rounded-2xl bg-blue-500 text-white shadow-lg hover:scale-105 transition"
            >
              <span className="text-lg font-bold">{t.telegram}</span>
              <span>💬</span>
            </a>

            {/* Extra */}
            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                {lang === "en" ? "Fast Response 🚀" : "رد سريع 🚀"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {lang === "en"
                  ? "I usually respond within minutes."
                  : "أرد خلال دقائق غالبًا"}
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
