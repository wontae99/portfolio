import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/util/motion";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: StaticImageData;
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-2 sm:py-4 px-5 sm:px-12 min-h-[240px] flex justify-evenly items-center flex-col">
      <Image
        src={icon}
        alt="web-development"
        className="w-16 h-16 object-contain"
      />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </motion.div>
);

export default ServiceCard;
