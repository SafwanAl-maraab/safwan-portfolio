import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({ children }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </section>
  );
}