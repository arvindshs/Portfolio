import React, { useEffect, useRef } from "react"; // ✅ Added React import
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const ZoomInOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInOnScroll;
