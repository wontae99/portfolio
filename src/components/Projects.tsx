"use client";

import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";

import { projects } from "@/constants";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left max-x-full justify-evenly mx-auto items-center z-0">
      <h3 className="relative pt-24 w-full justify-center text-center uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => (
          <div
            key={project.name}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={project.image.src}
              alt={project.name}
              className="max-h-[40%] md:max-h-[100%] w-full object-contain"
            />
            <div className="space-y-4 px-0 md:px-10 max-w-6xl">
              <Link href={project.source_code_link}>
                <h4 className="text-4xl font-semibold text-center hover:text-[#F7AB0A] transition-colors duration-75 ease-in">
                  {project.name}
                </h4>
              </Link>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag) => (
                  <p
                    key={`${project.name}-${tag.name}`}
                    className={`text-md ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <span className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </div>
  );
};

export default Projects;
