import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { projects } from "../data";
import { SocialIcon } from "react-social-icons";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font py-20">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20 text-center">
          <CodeBracketIcon className="mx-auto inline-block w-12 mb-4 text-green-500" />
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-white">
            Projects I've built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-400">
            A showcase of my recent work, featuring full-stack applications, interactive UI components, and modern web solutions.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.title} className="sm:w-1/2 w-full p-6">
              <div className="flex relative h-80 group overflow-hidden rounded-xl border-2 border-gray-800 hover:border-green-500 transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="px-8 py-6 relative z-10 w-full bg-gray-900/95 opacity-0 group-hover:opacity-100 flex flex-col justify-center transition-opacity duration-300 backdrop-blur-sm">
                  <h2 className="tracking-widest text-xs title-font font-semibold text-green-400 mb-1 uppercase">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-4 text-sm text-gray-300">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.technologies?.map((tech) => (
                      <span key={tech} className="bg-gray-800 text-green-400 px-2 py-1 rounded text-[10px] font-mono border border-green-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-center space-x-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-green-400 transition-colors text-sm font-medium"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-1" />
                      Live Demo
                    </a>
                    {project.github && (
                      <div className="flex items-center">
                        <SocialIcon 
                          url={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ height: 32, width: 32 }}
                          bgColor="transparent"
                          fgColor="#fff"
                          className="hover:scale-110 transition-transform"
                        />
                        <span className="text-white hover:text-green-400 transition-colors text-sm font-medium ml-1">Source</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
