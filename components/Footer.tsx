"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-200 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-5 flex flex-col items-center font-medium">
        <p className="text-sm text-center">
          © {currentYear} Garima Shingal. All Rights Reserved.
        </p>
        <div className="flex mt-4 space-x-6">
          <a
            href="https://www.linkedin.com/in/garima-shingal-8348417/"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/garimashingal"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:er.garimasinghal@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
