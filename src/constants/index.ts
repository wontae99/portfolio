import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  woncha,
  woncha_rn,
  wonscord,
  threejs,
} from "@/assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "WONCHA",
    description:
      "Responsive Web application that allows users to search and review movies and tv shows. Users can be authenticated with not only site's own ID but also Google and Kakao ID.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: woncha,
    source_code_link: "https://github.com/wontae99/woncha-typescript",
  },
  {
    name: "WONCHA - React Native",
    description:
      "Mobile application that enables users to users to review movies and tv shows. Mobile version of WONCHA.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: woncha_rn,
    source_code_link: "https://github.com/wontae99/woncha-RN",
  },
  {
    name: "Wonscord",
    description:
      "Mobile application that allows users to add friends and chat with each others. User authentication has been implemented with Google Firebase Authentication.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: wonscord,
    source_code_link: "https://github.com/wontae99/chat-app",
  },
];

export { services, technologies, projects };
