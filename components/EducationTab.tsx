import { education } from "../data";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function EducationTab() {
  return (
    <div className="px-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <AcademicCapIcon className="w-10 h-10 text-green-500 mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white title-font">
          Education & Certification
        </h2>
        <div className="h-1 w-20 bg-green-500 rounded mt-2"></div>
      </div>

      <div className="flex mx-auto lg:w-4/5 sm:w-auto mt-10 items-center justify-center flex-col">
        {education.map((edu) => {
          return (
            <div
              key={edu}
              className="w-full text-center mx-10 mb-2 flex rounded bg-gray-800 p-4 h-full"
            >
              <span className="text-white title-font font-medium w-full">
                {edu}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
