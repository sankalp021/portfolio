import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import WorkExperience from "@/components/main/WorkExperience";
import IntroTerminal from "@/components/sub/IntroTerminal";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <div className="flex justify-center px-4">
          <IntroTerminal />
        </div>
        <Skills />
        <WorkExperience />
        <Projects />
      </div>
    </main>
  );
}
