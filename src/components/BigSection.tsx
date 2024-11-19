import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
export const BigSection = ({ children }: { children: string }) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, {
    amount: 0.95,
    margin: '-300px 0px -300px 0px',
  });
  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25, delay: 0 }}
      className="flex h-[90vh] items-center justify-center text-4xl font-extrabold text-info md:text-5xl lg:text-6xl xl:text-8xl"
    >
      <span className="sticky top-1/2 -translate-y-1/2" ref={ref}>
        {children}
      </span>
    </motion.div>
  );
};
