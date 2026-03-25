import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { tools } from "../data";

export default function Tools() {
  return (
    <div className="flex flex-col items-center max-w-xs px-4">
      <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center">
        <WrenchScrewdriverIcon className="w-6 h-6 mr-2" />
        {tools.title}
      </h3>
      <p className="text-gray-400 text-sm mb-6 text-center italic">
        {tools.description}
      </p>
      <div className="flex flex-wrap justify-center">
        {tools.skills.map((skill) => {
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
