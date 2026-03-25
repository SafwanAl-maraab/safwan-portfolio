import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import ParallaxSection from "./components/ParallaxSection";

function App() {
  const [lang, setLang] = useState("en");
  
useEffect(() => {
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}, [lang]);

  return (
<div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">      <CursorGlow />

      <Navbar lang={lang} setLang={setLang} />

      <Hero lang={lang} />

      <ParallaxSection>
        <About lang={lang} />
      </ParallaxSection>

      <ParallaxSection>
        <Projects lang={lang} />
      </ParallaxSection>

      <ParallaxSection>
        <Contact lang={lang} />
      </ParallaxSection>

    </div>
  );
}

export default App;