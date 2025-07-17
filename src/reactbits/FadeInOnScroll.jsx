import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FadeInOnScroll = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // artinya: mulai terlihat sampai sepenuhnya lewat
  });

  const opacity = useTransform(scrollYProgress, [0, 8], [0.4, 8]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity }}
      className={`transition-opacity duration-50 ${className}`}
    >
      {children}
    </motion.p>
  );
};

export default FadeInOnScroll;
