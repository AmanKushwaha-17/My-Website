import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Experience />
    </>
  );
}
