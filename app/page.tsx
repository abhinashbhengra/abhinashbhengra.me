import Image from "next/image";
import Hero from "./components/hero-section";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Connect from "./components/connect";

export default function Home() {
  return (
    <main className="text-black min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Connect />
    </main>
  );
}
