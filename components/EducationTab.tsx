import { education } from "../data";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function EducationTab() {
  return (
    <div className="px-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <AcademicCapIcon className="w-10 h-10 text-blue-500 mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white title-font">
          Education & Certification
        </h2>
        <div className="h-1 w-20 bg-blue-500 rounded mt-2"></div>
      </div>

      <ul
        className="flex mx-auto lg:w-4/5 sm:w-auto mt-10 items-center justify-center flex-col space-y-4"
        aria-label="Education and certification list"
      >
        {education.map((edu, index) => {
          return (
            <li
              key={index}
              className="w-full text-left p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group shadow-lg flex items-center space-x-4"
            >
              <div
                className="p-2 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <AcademicCapIcon className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-white title-font font-medium text-lg lg:text-xl group-hover:text-blue-400 transition-colors duration-300">
                {edu}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
