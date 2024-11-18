import {useRef} from "react";
import { motion, useInView } from "framer-motion";
export const Big = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, {
    amount: 1,
    margin: "-300px 0px -300px 0px",
  });
  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25, delay: 0 }}
      className="flex h-[100vh] items-center justify-center text-7xl font-extrabold text-info"
    >
      <span className="sticky top-1/2 font-semibold" ref={ref}>
        {text}
      </span>
    </motion.div>
  );
};