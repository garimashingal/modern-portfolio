import { experience } from "../data";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export default function ExperienceTab() {
  return (
    <div className="px-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <BriefcaseIcon className="w-10 h-10 text-green-500 mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white title-font">
          Professional Journey
        </h2>
        <div className="h-1 w-20 bg-green-500 rounded mt-2"></div>
      </div>

      <div className="relative border-l-2 border-gray-700 ml-4 sm:ml-6 space-y-12">
        {experience.map((exp, index) => {
          return (
            <div key={index} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-900 border-2 border-green-500 group-hover:scale-125 transition-transform duration-300"></div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-green-500 bg-green-500/10 px-3 py-1 rounded-full mt-2 sm:mt-0 inline-block w-fit">
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-lg font-medium text-gray-300 mb-3">
                  {exp.company}
                </h4>

                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
