"use client";

// import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import Tools from "./Tools";
import EducationTab from "./EducationTab";
import ExperienceTab from "./ExperienceTab";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SkillsTab() {
  const searchParams = useSearchParams();
  const [toggleTab, setToggleTab] = useState("1");

  useEffect(() => {
    setToggleTab(searchParams.get("tab") || "1");
  }, [searchParams]);
  //  text-slate-900 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none hover:text-slate-900 dark:hover:text-white text-lg transition-all active:scale-95"
  let tabClasses =
    "lg:w-40 w-28 rounded mr-2 p-2 text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 focus:outline-none text-lg transition-all";
  let activeTabClass =
    "lg:w-40 w-28 rounded mr-2 p-2 text-white bg-blue-600 border-0 focus:outline-none text-lg shadow-lg shadow-blue-500/20 transition-all";
  return (
    <div className="container w-full text-center mx-auto">
      <div id="tabs" className="flex justify-center items-center text-center" role="tablist" aria-label="Skills, Experience, and Education tabs">
        <button
          id="tab-1"
          role="tab"
          aria-selected={toggleTab === "1"}
          aria-controls="panel-1"
          className={toggleTab === "1" ? activeTabClass : tabClasses}
          onClick={() => setToggleTab("1")}
          suppressHydrationWarning
        >
          Skills
        </button>
        <button
          id="tab-2"
          role="tab"
          aria-selected={toggleTab === "2"}
          aria-controls="panel-2"
          className={toggleTab === "2" ? activeTabClass : tabClasses}
          onClick={() => setToggleTab("2")}
          suppressHydrationWarning
        >
          Experience
        </button>
        <button
          id="tab-3"
          role="tab"
          aria-selected={toggleTab === "3"}
          aria-controls="panel-3"
          className={toggleTab === "3" ? activeTabClass : tabClasses}
          onClick={() => setToggleTab("3")}
          suppressHydrationWarning
        >
          Education
        </button>
      </div>

      <div id="tabs-content" className=" text-lg font-medium text-slate-900 dark:text-white mt-20 transition-colors">
        <div
          id="panel-1"
          role="tabpanel"
          aria-labelledby="tab-1"
          className={toggleTab === "1" ? " " : "hidden"}
        >
          <div className="flex flex-col items-center mb-12">
            <CpuChipIcon className="w-10 h-10 text-blue-500 mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground title-font transition-colors">
              Technical Expertise
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded mt-2"></div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-evenly w-full sm:w-auto mt-10 space-y-12 sm:space-y-0">
            <FrontendSkills />
            <BackendSkills />
            <Tools />
          </div>
        </div>

        <div
          id="panel-2"
          role="tabpanel"
          aria-labelledby="tab-2"
          className={toggleTab === "2" ? " " : "hidden"}
        >
          <ExperienceTab />
        </div>

        <div
          id="panel-3"
          role="tabpanel"
          aria-labelledby="tab-3"
          className={toggleTab === "3" ? " " : "hidden"}
        >
          <EducationTab />
        </div>
      </div>
    </div>
  );
}
