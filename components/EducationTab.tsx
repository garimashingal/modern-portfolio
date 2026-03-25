import { education } from "../data";

export default function EducationTab() {
  return (
    <>
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
    </>
  );
}
