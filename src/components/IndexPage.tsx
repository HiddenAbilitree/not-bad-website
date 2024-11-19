import { useRef } from 'react';
import { BigSection } from './BigSection';
import { WrappedHeader } from './WrappedHeader';
import { ProgressBar } from './ProgressBar';
import { motion, useInView } from 'framer-motion';
export const IndexPage = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref, {
    amount: 0.61,
    once: false,
  });
  return (
    <>
      <ProgressBar />
      <WrappedHeader divRef={ref} />
      <BigSection>Hi</BigSection>
      <motion.div
        ref={ref}
        className="mx-5 flex h-screen flex-col items-center justify-center space-y-5 text-white sm:mx-16 sm:py-12 xl:mx-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -150 }}
        transition={{ duration: 0.5, damping: 10, delay: 0, ease: 'easeInOut' }}
      >
        <span className="text-foreground text-center text-3xl font-bold">
          I'm Eric Zhang, a Computer Science student at George Mason University.
        </span>
        <footer className="mt-auto flex flex-col items-center justify-center p-4 text-center text-sm text-secondary">
          <span>Contact me on Discord @hiddenability</span>
          <span>
            {' '}
            or email me at
            <a
              className="text-secondary hover:text-primary"
              href="mailto:eric@ericzhang.dev"
            >
              {' '}
              eric@ericzhang.dev
            </a>
          </span>
        </footer>
      </motion.div>
    </>
  );
};
