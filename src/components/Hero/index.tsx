"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";
import profile from "@/assets/profile.jpg";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Wontae Jeon", "<SoftwareEngineer />"],
    loop: true,
    delaySpeed: 1700,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center text-center justify-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-48 w-48 mx-auto object-cover"
        src={profile}
        alt="Profile Image"
      />
      <div className="space-y-4 z-20">
        <h2 className="text-sm pb-2 uppercase text-gray-500 tracking-[15px]">
          software engineer
        </h2>
        <h1 className="flex flex-col text-3xl md:text-4xl lg:text-5xl font-semibold px-10">
          <span className="mb-2">Hi, I Am</span>
          <span className="text-pink-500">
            {text}
            <Cursor cursorColor="#F7AB0A" />
          </span>
        </h1>

        <div className="pt-5 space-x-5">
          <Link href="#about" className="heroButton">
            <button>About</button>
          </Link>
          <Link href="#skills" className="heroButton">
            <button>Skills</button>
          </Link>
          <Link href="#projects" className="heroButton">
            <button>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
