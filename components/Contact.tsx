import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "", // Access Key from https://web3forms.com/
          name: name,
          email: email,
          message: message,
          from_name: "Portfolio Contact Form",
          subject: `New Contact from ${name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        alert("Message sent successfully!");
      } else {
        setStatus("error");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("Error sending message. Please check your connection.");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section id="contact" className="relative body-font bg-gray-900 border-t border-gray-800">
      <div className="container flex sm:flex-row flex-col px-5 mx-auto py-24 sm:flex-nowrap">
        {/* Map and Address Column */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border border-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185586.64608004698!2d-80.00472815190449!3d43.381386720053904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b63d2965d93b7%3A0xa44a27764c2b554f!2sBurlington%2C%20ON!5e0!3m2!1sen!2sca!4v1774471311896!5m2!1sen!2sca"
            width="100%"
            height="100%"
            className="absolute inset-0 opacity-100 transition-opacity duration-300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>

          <div className="bg-gray-900 border border-gray-800 relative flex flex-wrap py-6 rounded-lg shadow-2xl backdrop-blur-sm bg-opacity-90">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs uppercase">
                Location
              </h2>
              <p className="mt-1 text-gray-300">
                Burlington, Ontario, Canada
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs uppercase">
                Email
              </h2>
              <a href="mailto:er.garimasinghal@gmail.com" className="text-green-400 leading-relaxed hover:text-green-300 transition-colors">
                er.garimasinghal@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <form
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          onSubmit={handleSubmit}
        >
          <h2 className="text-white text-4xl mb-1 font-bold title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">
            Have a project in mind? Let's discuss how we can build something amazing together.
          </p>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              value={name}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
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
              required
              aria-required="true"
              value={email}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              value={message}
              rows={4}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            aria-busy={status === "loading"}
            className={`text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          <div role="status" aria-live="polite" className="mt-3 text-center">
            {status === "success" && (
              <p id="success-message" className="text-green-400 text-sm">Form submitted successfully!</p>
            )}
            {status === "error" && (
              <p id="error-message" className="text-red-400 text-sm">Failed to send. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
