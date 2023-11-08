"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { slideIn } from "@/util/motion";
import ContactForm from "./ContactForm";

type Props = {};

const Contact = (props: Props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="h-screen relative flex flex-col text-center max-w-7xl justify-evenly mx-auto items-center px-10">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <span className="pt-24">&nbsp;</span>
      <div className="flex flex-col space-y-5">
        <div className="space-y-10">
          <div className="flex items-center space-x-4 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+81 1054813943</p>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">jwt3943@naver.com</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
