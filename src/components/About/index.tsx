"use client";

import React from "react";

import { services } from "@/constants";
import ServiceCard from "./ServiceCard";
import { Tilt } from "react-tilt";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center max-x-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <span className="pt-24">&nbsp;</span>
      <div className="flex gap-4 sm:gap-10">
        {services.map((service, index) => (
          <Tilt key={service.title} className="sm:w-[250px] w-full">
            <ServiceCard key={service.title} index={index} {...service} />
          </Tilt>
        ))}
      </div>
      <div>
        <p className="text-gray-300">
          I&apos;m a software developer with experience in TypeScript and
          JavaScript. I&apos;m also skilled at frameworks like React, Next.js,
          React-Native. I am always passionate aboute learning about new techs &
          skills.
        </p>
      </div>
    </div>
  );
};

export default About;

{
  /* <motion.div
initial={{ x: -200, opacity: 0 }}
transition={{ duration: 0.8 }}
whileInView={{ x: 0, opacity: 1 }}
viewport={{ once: true }}
className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 lg:w-[500px] lg:h-[600px] overflow-hidden"
>
<Image className="object-cover" src={id_photo} alt="ID photo" />
</motion.div> */
}
