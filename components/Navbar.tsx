"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import DownloadResume from "./DownloadResume";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 bg-opacity-80 z-50 backdrop-blur-sm border-b border-gray-700/50" role="banner">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <section className="title-font font-medium text-white hover:text-amber-400 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl" aria-label="Garima Shingal - Back to top">
            Garima Shingal
          </a>
        </section>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center text-white" aria-label="Main Navigation">
          <a href="#projects" className="mr-5 hover:text-amber-400 transition-colors focus:ring-2 focus:ring-amber-400 rounded px-1">
            Projects
          </a>

          <a href="#skills" className="mr-5 hover:text-amber-400 transition-colors focus:ring-2 focus:ring-amber-400 rounded px-1">
            Skills
          </a>

          <a href="#contact" className="mr-5 hover:text-amber-400 transition-colors focus:ring-2 focus:ring-amber-400 rounded px-1">
            Contact
          </a>
          <DownloadResume />
        </nav>

        <div className="mt-1 md:mt-0 flex items-center space-x-2">
          <SocialIcon
            target="_blank"
            url="https://www.linkedin.com/in/garima-shingal-8348417/"
            style={{ height: "30px", width: "30px", marginRight: "14px" }}
            className="transform transition duration-200 ease-in-out hover:scale-150"
            aria-label="Visit my LinkedIn profile"
          />
          <SocialIcon
            target="_blank"
            url="https://github.com/garimashingal?tab=repositories"
            style={{ height: "40px", width: "40px", marginRight: "14px" }}
            className="transform transition duration-200 ease-in-out hover:scale-150"
            aria-label="Visit my GitHub repositories"
          />
        </div>

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded-lg hover:text-amber-400 text-white text-base mt-4 md:mt-0 transition-all font-semibold shadow-md active:scale-95"
          aria-label="Hire me - Open contact section"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
