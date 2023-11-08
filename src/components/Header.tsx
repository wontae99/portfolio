"use client";

import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

import { useRouter } from "next/navigation";

type Props = {};

export default function Header({}: Props) {
  const router = useRouter();
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <SocialIcon
          url="https://www.github.com/wontae99"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/wontae.jeon"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/wontae.joen"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.button
        onClick={() => router.push("#contact")}
        className="flex flex-row items-center cursor-pointer"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          GET IN TOUCH
        </p>
      </motion.button>
    </header>
  );
}
