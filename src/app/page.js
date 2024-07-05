import Award from "@/components/ui/Award";
import Education from "@/components/ui/Education";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <main className="">
     
      <Hero/>
      <Projects/>
      <Skills/>
      <Award/>
      <Education/>
    </main>
  );
}
