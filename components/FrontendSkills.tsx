import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { frontendSkills } from "../data";

export default function FrontendSkills() {
  return (
    <div className="flex flex-col items-center max-w-sm px-4">
      <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-xl w-full h-full group">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-green-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <CodeBracketIcon className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 text-center transition-colors group-hover:text-green-400">
          {frontendSkills.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-8 text-center leading-relaxed">
          {frontendSkills.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {frontendSkills.skills.map((skill) => (
            <span 
              key={skill} 
              className="bg-gray-700/50 text-gray-200 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-600 hover:border-green-500/30 hover:text-green-400 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
