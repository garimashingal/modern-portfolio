import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { skills, education, experience } from "../data";
import { useState } from "react";

export default function SkillsTab() {
  const [toggleTab, setToggleTab] = useState(1);

  let tabClasses =
    "w-28 rounded mr-2 p-2 text-white bg-gray-800 border-0 focus:outline-none text-lg";
  let activeTabClass =
    "w-28 rounded mr-2 p-2 text-white bg-green-500 border-0 focus:outline-none text-lg";
  return (
    <div className="container w-2/3 text-center mx-auto">
      <div id="tabs" className="flex justify-center items-center text-center">
        <div
          className={toggleTab === 1 ? activeTabClass : tabClasses}
          onClick={() => setToggleTab(1)}
        >
          Skills
        </div>
        <div
          className={toggleTab === 2 ? activeTabClass : tabClasses}
          onClick={() => setToggleTab(2)}
        >
          Experience
        </div>
        <div
          className={toggleTab === 3 ? activeTabClass : tabClasses}
          onClick={() => setToggleTab(3)}
        >
          Education
        </div>
      </div>

      <div id="tabs-content" className=" text-lg font-medium text-white mt-10">
        <div className={toggleTab === 1 ? " " : "hidden"}>
          <h2>Skills</h2>
          <div className="flex flex-wrap mx-auto w-full sm:w-auto mt-10">
            {skills.map((skill) => {
              return (
                <div key={skill} className=" p-2 lg:w-1/2 w-full">
                  <div className="flex rounded bg-gray-800 p-4 h-full items-center w-full">
                    <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="text-white title-font font-medium">
                      {skill}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={toggleTab === 2 ? " " : "hidden"}>
          <h2>Experience</h2>
          <div className="flex mx-auto lg:w-4/5 sm:w-auto mt-10 items-center justify-center flex-col">
            {experience.map((exp) => {
              return (
                <div
                  key={exp}
                  className="w-full text-center mx-10 mb-2 flex rounded bg-gray-800 p-4 h-full "
                >
                  <span className="text-white title-font font-medium w-full">
                    {exp}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={toggleTab === 3 ? " " : "hidden"}>
          <h2>Education & Certification</h2>
          <div className="flex mx-auto lg:w-4/5 sm:w-auto mt-10 items-center justify-center flex-col">
            {education.map((edu) => {
              return (
                <div
                  key={edu}
                  className="w-full text-center mx-10 mb-2 flex rounded bg-gray-800 p-4 h-full "
                >
                  <span className="text-white title-font font-medium w-full">
                    {edu}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
