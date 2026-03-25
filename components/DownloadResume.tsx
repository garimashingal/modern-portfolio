import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadResume() {
  return (
    <a
      href="/resume.pdf"
      download="Garima_Shingal_Resume.pdf"
      className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded hover:text-amber-400 text-white text-base mt-4 md:mt-0"
    >
      Download Resume
      <ArrowDownTrayIcon className="w-4 h-4 ml-1" />
    </a>
  );
}
