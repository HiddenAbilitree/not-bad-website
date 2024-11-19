import { motion, useInView } from 'motion/react';
import Image from '@assets/github-mark-white.svg';
export const WrappedHeader = ({
  divRef,
}: {
  divRef: React.RefObject<HTMLDivElement>;
}) => {
  const isInView = useInView(divRef, { amount: 0.7 });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -150 }}
      transition={{ duration: 0.5, damping: 10, delay: 0, ease: 'easeInOut' }}
      className="align-left fixed left-0 right-0 top-0 flex select-none items-center justify-center px-5 py-5 font-bold text-accent sm:px-16 sm:py-12 sm:text-3xl md:text-4xl xl:px-80"
    >
      <span>
        <a
          href="/"
          className="bg-gradient-to-r from-info to-accent bg-clip-text leading-normal text-transparent"
        >
          ericzhang.dev
        </a>
      </span>
      <nav className="ml-auto flex items-center space-x-8">
        <a href="/projects">projects</a>
        <a href="/blog">blog</a>
        <a href="https://github.com/HiddenAbilitree">
          <img className="h-6 w-6 sm:h-8 sm:w-8" src={Image} alt="Github" />
        </a>
      </nav>
    </motion.div>
  );
};
