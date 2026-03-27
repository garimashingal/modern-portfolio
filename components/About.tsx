export default function About() {
  return (
    <section id="about" className=" lg:pt-16">
      <div className="container mx-auto flex px-10 py-20 items-center flex-col md:flex-row">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-20 items-center text-center">
          <br />
          <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi 👋, I am Garima Shingal.
            <br />
            Full Stack developer
          </h1>
          <br />
          <br />

          <p className="mb-8 leading-relaxed">
            I am a dedicated Full-Stack Developer with 8+ years of professional
            experience in various organizations, specializing in building
            highly responsive and accessible applications using HTML, CSS,
            JavaScript, React, and Next.js, backed by solid backend expertise in
            Node.js and RESTful APIs. I am passionate about continuous learning
            and keeping pace with evolving industry trends to deliver
            cutting-edge digital solutions.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white font-semibold bg-blue-600 py-2 px-6 border-0 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="inline-flex ml-4 rounded py-2 px-6 border-0 bg-slate-800 text-slate-400 hover:bg-slate-600 focus:outline-none hover:text-white text-lg"
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
