import type { NextPage } from "next";
import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const navigation = [
  { name: "hero", component: <Hero /> },
  { name: "about", component: <About /> },
  { name: "skills", component: <Skills /> },
  { name: "projects", component: <Projects /> },
  { name: "contact", component: <Contact /> },
];

const Home: NextPage = () => {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20">
      <Head>
        <title>{"WONTAE's Portfolio"}</title>
      </Head>
      {/* Header */}
      <Header />
      {navigation.map((item) => (
        <section key={item.name} id={item.name} className="snap-center">
          {item.component}
        </section>
      ))}
    </main>
  );
};

export default Home;
