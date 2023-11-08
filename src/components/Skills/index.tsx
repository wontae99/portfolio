"use client";

import React from "react";
import { motion } from "framer-motion";

import BallCanvas from "../canvas/Ball";
import { technologies } from "@/constants";
import { fadeIn } from "@/util/motion";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center max-x-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <span className="pt-24">&nbsp;</span>
      <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-5 lg:gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-20 h-20 sm:w-28 sm:h-28 cursor-pointer"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
