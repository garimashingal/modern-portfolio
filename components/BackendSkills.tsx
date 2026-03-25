import { ServerIcon } from "@heroicons/react/24/outline";
import { backendSkills } from "../data";

export default function BackendSkills() {
  return (
    <div className="flex flex-col items-center max-w-xs px-4 border-y sm:border-y-0 sm:border-x border-gray-700 py-8 sm:py-0">
      <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center">
        <ServerIcon className="w-6 h-6 mr-2" />
        {backendSkills.title}
      </h3>
      <p className="text-gray-400 text-sm mb-6 text-center italic">
        {backendSkills.description}
      </p>
      <div className="flex flex-wrap justify-center">
        {backendSkills.skills.map((skill) => {
          return (
            <div key={skill} className="p-1 w-auto">
              <div className="flex bg-gray-600 p-1 px-2 h-full items-center justify-center w-full rounded-2xl text-sm">
                <span className="text-white title-font font-base">{skill}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
