import { ServerIcon } from "@heroicons/react/24/solid";
import { backendSkills } from "../data";

export default function BackendSkills() {
  return (
    <div className="flex flex-col items-center max-w-sm px-4">
      <div className="bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl w-full h-full group">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <ServerIcon className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 text-center transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {backendSkills.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-base mb-8 text-center leading-relaxed transition-colors">
          {backendSkills.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {backendSkills.skills.map((skill) => (
            <span
              key={skill}
              className="bg-white dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-600 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
