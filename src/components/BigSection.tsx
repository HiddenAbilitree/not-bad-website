import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
export const BigSection = ({ children }: { children: string }) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, {
    amount: 0.65,
    margin: '-300px 0px -300px 0px',
  });
  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25, delay: 0 }}
      className="flex h-[90vh] flex-col items-center justify-center text-4xl font-extrabold leading-normal text-info md:text-5xl lg:text-6xl xl:text-8xl"
    >
      <div
        className="sticky top-1/2 flex -translate-y-1/2 flex-col items-center justify-center"
        ref={ref}
      >
        {children}
        <div className="flex flex-col items-center justify-center text-xs">
          <p className="h-min select-none font-extralight text-secondary">
            Scroll
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            viewBox="0 -960 960 960"
            width="10px"
            className="fill-secondary"
          >
            <path d="M479.87-83Q474-83 469-85q-5-2-10-7L221-330q-9-9-9-21.2 0-12.19 9-20.8 8.8-9 20.9-9 12.1 0 21.1 9l187 187v-276q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v276l187-187q9-9 21.1-9 12.1 0 20.9 9 9 9 9 21t-9 21L501-92q-5 5-10.13 7-5.14 2-11 2Zm-.05-468q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-80q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v81q0 13-8.68 21-8.67 8-21.5 8Zm0-200q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-60q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v61q0 13-8.68 21-8.67 8-21.5 8Z"></path>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
