export default function About() {
  return (
    <section id="about" className=" lg:pt-16">
      <div className="container mx-auto flex px-10 py-10 items-center flex-col md:flex-row">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-20 items-center text-center">
          <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-bold text-foreground transition-colors">
            Hi 👋, I am Garima Shingal.
            <br />
            Full Stack developer
          </h1>
          <br />
          <br />
          {/* 
          <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-300 transition-colors">
            I am a dedicated Full-Stack Developer with 8+ years of professional
            experience in various organizations, specializing in building
            highly responsive and accessible applications using HTML, CSS,
            JavaScript, React, and Next.js, backed by solid backend expertise in
            Node.js and RESTful APIs. I am passionate about continuous learning
            and keeping pace with evolving industry trends to deliver
            cutting-edge digital solutions.
          </p> */}
          <p className="mb-8 leading-relaxed text-black dark:text-slate-300 transition-colors font-normal">
            <span>I’m a Full-Stack Developer with 8+ years of experience, but for me, it’s always been about more than just code, it’s about creating experiences people enjoy. I’ve worked across roles and industries building responsive, scalable applications with React, Next.js, and Node.js, with a strong focus on clean architecture and thoughtful design.</span>
            <br />
            <br />
            <span>I enjoy turning ideas into real, impactful products, bridging the gap between design and development across the full lifecycle. Always curious and learning, I’m constantly exploring new technologies and AI-driven approaches to build better, future-ready solutions.</span></p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white font-semibold bg-blue-600 py-2 px-6 border-0 focus:outline-none hover:bg-blue-700 rounded text-lg transition-all active:scale-95"
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="inline-flex ml-4 rounded py-2 px-6 border-0 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none hover:text-slate-900 dark:hover:text-white text-lg transition-all active:scale-95"
            >
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-72 md:w-1/2 w-5/6">
          <img
            src="garima.jpeg"
            className="object-center object-cover rounded-full"
            alt="Portfolio"
          ></img>
        </div>
      </div>
    </section>
  );
}
