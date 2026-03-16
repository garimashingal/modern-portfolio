"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 bg-opacity-80">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <section className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Garima Shingal
          </a>
        </section>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>

          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>

          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>

        <div className="mt-1 md:mt-0">
          <SocialIcon
            target="_blank"
            url="https://www.linkedin.com/in/garima-shingal-8348417/"
            style={{ height: "30px", width: "30px", marginRight: "14px" }}
          />
          <SocialIcon
            target="_blank"
            url="https://github.com/garimashingal/myProjects"
            style={{ height: "40px", width: "40px", marginRight: "14px" }}
          />
        </div>

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
