import { experience } from "../data";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export default function ExperienceTab() {
  return (
    <div className="px-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <BriefcaseIcon className="w-10 h-10 text-blue-500 mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white title-font transition-colors">
          Professional Journey
        </h2>
        <div className="h-1 w-20 bg-blue-500 rounded mt-2"></div>
      </div>

      <ol
        className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 sm:ml-6 space-y-12"
        aria-label="Professional experience timeline"
      >
        {experience.map((exp, index) => {
          return (
            <li key={index} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Dot */}
              <div
                className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500 group-hover:scale-125 transition-transform duration-300"
                aria-hidden="true"
              ></div>

              <div className="bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full mt-2 sm:mt-0 inline-block w-fit">
                    <span className="sr-only">Duration: </span>
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3 transition-colors">
                  <span className="sr-only">Company: </span>
                  {exp.company}
                </h4>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                  {exp.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
