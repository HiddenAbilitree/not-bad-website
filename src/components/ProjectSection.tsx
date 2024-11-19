import { motion, useInView } from "motion/react";
import { useRef } from "react";
export const ProjectSection = () => {
  const data = {
    title: "repo-name",
    author: "repo-author",
    description: "Generic description for a repo.",
    langauge: "TypeScript",
    repo: "https://github.com/HiddenAbilitree/sbcshs-website",
    color: " bg-success",
  };
  const ref = useRef(null);
  const isVisible = useInView(ref, {
    amount: 0.9,
    // once: true,
    margin: "-200px 0px 300px 0px",
  });

  return (
    <motion.div
      style={{
        transform: isVisible ? "none" : "translateX(-200px)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ",
      }}
      ref={ref}
      className="flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="flex h-96 w-1/2 -translate-y-1/2 flex-col bg-primary bg-gradient-to-r from-accent to-info"></div>
      <div className="flex h-96 w-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 p-4">
        <div id="content" className="p-4 font-bold text-primary">
          <a href={data.repo} className="text-4xl font-bold">
            {data.title}
          </a>
          <p className="text-secondary">{data.description}</p>
          <div className="flex items-center gap-4">
            <div className="text-sm text-secondary">{data.langauge}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
