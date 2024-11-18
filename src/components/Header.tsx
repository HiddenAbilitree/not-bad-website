import { motion, useInView } from "motion/react";
export const Header = (props: any) => {
  const isInView = useInView(props.refDiv, { amount: 1 }); //   const opacity = useSpring(isInView ? 1 : 0, {
  //     stiffness: 100,
  //     damping: 10,
  //     restDelta: 0.001,
  //   });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -150 }}
      transition={{ duration: 0.5, damping: 10, delay: 0, ease: "easeInOut" }}
      className="align-left fixed left-0 right-0 top-0 mx-5 flex select-none items-center justify-center py-5 font-bold text-accent sm:mx-16 sm:py-12 sm:text-3xl md:text-4xl xl:mx-80"
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
        <a href="/" >
          blog
        </a>
        <a href="/" > 
          {props.children}
        </a>
      </nav>
    </motion.div>
  );
};
