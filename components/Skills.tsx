import { CpuChipIcon } from "@heroicons/react/24/outline";
import SkillsTab from "./SkillsTab";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto mb-16 md:mb-20">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About Me
          </h1>
        </div>
        <SkillsTab />
      </div>
    </section>
  );
}
