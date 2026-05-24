import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Skills />
      <CtaBanner />
      <Contact />
    </>
  );
}
