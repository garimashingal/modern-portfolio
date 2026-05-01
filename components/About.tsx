import Image from "next/image";
export default function About() {
  return (
    <section id="about" className=" lg:pt-16 md:pt-8 pt-6">
      <div className="container mx-auto flex px-10 pb-10  items-center flex-col-reverse md:flex-row">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-20 items-center text-center">
          <div className="text-blue-700 bg-blue-200 px-2 py-1 rounded mb-4 text-xs flex items-center gap-1">
            <div className="h-2 w-2 bg-blue-700 rounded-full"></div>
            <span>Available for new opportunities</span>
          </div>
          <h1 className="flex flex-col gap-1 title-font sm:text-4xl text-3xl font-bold text-foreground transition-colors">
            Garima Shingal
            <span className="text-blue-500 text-lg">Full Stack developer</span>
          </h1>
          <br />
          <p className="mb-8 text-md text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors">
            <span>
              I’m a Full Stack Developer with a background in software engineering,
              and for me, it’s always been about more than just code, it’s about creating
              experiences people genuinely enjoy.
              I’ve worked across different domains, building responsive and scalable
              applications using React, Next.js, TypeScript, and modern web technologies,
              with a strong focus on clean architecture and thoughtful, user-centric design.
            </span>
            <br />
            <br />
            <span>I enjoy turning ideas into real, impactful products and working across the
              full development lifecycle, bridging the gap between design and development
              to build intuitive, reliable, and high-performing applications.
              While my primary focus is on crafting seamless frontend experiences,
              I am equally comfortable working across the full stack, integrating APIs and
              supporting backend systems when needed.
            </span>
            <br />
            <br />
            <span>
              I am curious and continuously learning, exploring new tools and
              AI-assisted approaches to build better, more efficient, and future-ready
              solutions.
            </span>
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white font-semibold bg-blue-600 py-2 px-6 border-0 focus:outline-none hover:bg-blue-700 rounded text-md transition-all active:scale-95"
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="inline-flex ml-4 rounded py-2 px-6 border-0 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none hover:text-slate-900 dark:hover:text-white text-md transition-all active:scale-95"
            >
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-72 md:w-1/2 w-5/6 mb-8 md:mb-0">
          <Image
            src="/garima.jpeg"
            className="object-center object-cover rounded-full"
            alt="Portfolio Image - Garima Shingal"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </section >
  );
}
