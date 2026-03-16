export default function About() {
  return (
    <section id="about" className=" lg:pt-16">
      <div className="container mx-auto flex px-10 py-20 items-center flex-col md:flex-row">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-20 items-center text-center">
          <br />
          <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi 👋, I am Garima Shingal.
            <br />
            Frontend developer
          </h1>
          <br />
          <br />

          <p className="mb-8 leading-relaxed">
            I am a software developer with 6+ years of experience in various
            organizations. After a career break to care for my family, I am now
            eager to re-enter the tech industry. I specialize in developing
            responsive web applications using HTML, CSS, JavaScript, React,
            Bootstrap, and Tailwind CSS. I am passionate about learning new
            technologies, keeping up with the latest industry trends and
            standards.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 py-2 px-6 border-0 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="inline-flex ml-4 rounded py-2 px-6 border-0 bg-grey-800 text-grey-400 hover:bg-grey-600 focus:outline-none hover:text-white text-lg"
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
