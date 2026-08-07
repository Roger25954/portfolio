import MobileNav from "@/Components/MobileNav";
import Sidebar from "@/Components/Sidebar";
import Hero from "@/Components/Hero";
import GithubPanel from "@/Components/GithubPanel";
import About from "@/Components/About";
import Stack from "@/Components/Stack";
import Projects from "@/Components/Projects";
import Education from "@/Components/Education";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-paper font-body md:grid md:grid-cols-[260px_1fr]">
      <MobileNav />
      <Sidebar />
      <main>
        <Hero />
        <GithubPanel />
        <About />
        <Stack />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}