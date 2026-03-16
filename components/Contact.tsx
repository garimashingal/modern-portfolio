import { useState } from "react";

type ContactFormData = {
  "form-name": string;
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data: ContactFormData): string {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(data[key as keyof ContactFormData]),
      )
      .join("&");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container flex sm:flex-row flex-col px-5 mx-auto py-10 sm:flex-nowrap">
        <div className=" overflow-hidden flex items-end justify-start relative p-10 bg-gray-900 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185382.37562250174!2d-79.78919008753023!3d43.44807738012259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5b8b8f729979%3A0x5037b28c7231bd0!2sOakville%2C%20ON!5e0!3m2!1sen!2sca!4v1715830730616!5m2!1sen!2sca"
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
          ></iframe>

          <div className="flex flex-wrap rounded bg-gray-900 shadow-md relative py-6 px-6">
            <div className=" lg:w-1/2 mt-0 px-6 ">
              <h2 className="text-white title-font font-semibold tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className=" mt-1 text-nowrap">Oakville, Ontario, Canada</p>

              <h2 className="text-white title-font font-semibold tracking-widest text-xs  mt-4">
                EMAIL
              </h2>
              <p className="text-indigo-400 leading-relaxed">
                er.garimasinghal@gmail.com
              </p>
            </div>
            {/* <div className=" lg:w-1/2 mt-4 lg:mt-0 px-4 pr-12">
              <h2 className="text-white title-font font-semibold tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                er.garimasinghal@gmail.com
              </a>

              <h2 className="text-white title-font font-semibold tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+1(289)8853643</p>
            </div> */}
          </div>
        </div>

        <form
          data-netlify="true"
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl text-white title-font mb-2 font-medium sm:text-4xl">
            Contact Me
          </h2>
          <input type="hidden" name="form-name" value="contact" />
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" w-full bg-gray-800 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" w-full bg-gray-800 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className=" w-full bg-gray-800 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
