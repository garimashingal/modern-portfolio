// import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import Tools from "./Tools";
import EducationTab from "./EducationTab";
import ExperienceTab from "./ExperienceTab";

export default function SkillsTab() {
  const [toggleTab, setToggleTab] = useState(1);

  let tabClasses =
    "lg:w-40 w-28 rounded mr-2 p-2 text-white bg-gray-800 border-0 focus:outline-none text-lg";
  let activeTabClass =
    "lg:w-40 w-28 rounded mr-2 p-2 text-white bg-green-500 border-0 focus:outline-none text-lg";
  return (
    <div className="container w-full text-center mx-auto">
      <div id="tabs" className="flex justify-center items-center text-center">
        <button
          className={toggleTab === 1 ? activeTabClass : tabClasses}
          onClick={() => setToggleTab(1)}
        >
          Skills
        </button>
        <button
          className={toggleTab === 2 ? activeTabClass : tabClasses}
          onClick={() => setToggleTab(2)}
        >
          Experience
        </button>
        <button
          className={toggleTab === 3 ? activeTabClass : tabClasses}
          onClick={() => setToggleTab(3)}
        >
          Education
        </button>
      </div>

      <div id="tabs-content" className=" text-lg font-medium text-white mt-20">
        <div className={toggleTab === 1 ? " " : "hidden"}>
          <div className="flex flex-col items-center mb-12">
            <CpuChipIcon className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white title-font">
              Technical Expertise
            </h2>
            <div className="h-1 w-20 bg-green-500 rounded mt-2"></div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-evenly w-full sm:w-auto mt-10 space-y-12 sm:space-y-0">
            <FrontendSkills />
            <BackendSkills />
            <Tools />
          </div>
        </div>

        <div className={toggleTab === 2 ? " " : "hidden"}>
          <ExperienceTab />
        </div>

        <div className={toggleTab === 3 ? " " : "hidden"}>
          <EducationTab />
        </div>
      </div>
    </div>
  );
}
