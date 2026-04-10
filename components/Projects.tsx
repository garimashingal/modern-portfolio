import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { projects } from "../data";
import { SocialIcon } from "react-social-icons";

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-300 py-24 overflow-hidden transition-colors duration-300">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col w-full mb-24 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl w-fit mx-auto mb-6">
            <CodeBracketIcon className="w-10 h-10 text-blue-500" />
          </div>
          <h2 className="sm:text-5xl text-4xl font-extrabold title-font mb-6 text-foreground tracking-tight transition-colors">
            Featured Projects
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-slate-600 dark:text-slate-400 font-medium transition-colors">
            A detailed look at the specialized applications and tools I've engineered, focusing on performance, accessibility, and user experience.
          </p>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              role="article"
              aria-labelledby={`project-title-${index}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 group relative">
                <div className="absolute -inset-2 bg-linear-to-r from-blue-500/10 dark:from-blue-500/20 to-blue-500/10 dark:to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-500 group-hover:border-blue-500/30">
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 dark:from-slate-950/60 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 flex flex-col space-y-6">
                <div>
                  <span className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                    {project.subtitle}
                  </span>
                  <h3
                    id={`project-title-${index}`}
                    className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors"
                  >
                    {project.title}
                  </h3>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 dark:bg-slate-800/80 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 hover:border-blue-500/30 transition-colors shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white bg-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 group/btn"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2 transform transition group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>

                  {project.github && project.github !== "NA" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-bold transition-all group/git"
                      aria-label={`View source code of ${project.title} on GitHub`}
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 mr-2 group-hover/git:scale-110 transition-transform"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      Source Code
                    </a>
                  )}
                  {project.github === "NA" && (
                    <span className="inline-flex items-center text-slate-600 dark:text-slate-300 font-bold transition-all group/git">
                      Source Code Not Available
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
