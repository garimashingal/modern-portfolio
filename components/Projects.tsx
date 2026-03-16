import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-20">
          <CodeBracketIcon className="w-10 inline-block mb-4" />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Apps I've built
          </h1>
        </div>

        <div className="flex flex-wrap m-4">
          {projects.map((project) => {
            return (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative">
                  <img
                    src={project.image}
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-center object-fill"
                  />
                  <div className="px-8 py-4 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 h-60 overflow-hidden">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
