"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[slate-950] text-slate-500 py-8 border-t border-slate-800">
      <div className="container mx-auto px-5 flex flex-col items-center">
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
