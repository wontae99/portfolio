import { JSX } from "react";

import { motion } from "framer-motion";
import { staggerContainer } from "@/util/motion";

const SectionWrapper = (Component: () => JSX.Element, idName: string) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        // @ts-ignore
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative h-screen max-x-7xl px-10 mx-auto z-0"
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
