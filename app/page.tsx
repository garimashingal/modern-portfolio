"use client";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen items-center justify-center bg-[#0a0a0a] font-sans text-white">
      <main className="text-gray-400 bg-[#0a0a0a] body-font">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
