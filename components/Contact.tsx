import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

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
    <section
      id="contact"
      className="relative body-font bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300"
    >
      <div className="container flex sm:flex-row flex-col px-5 mx-auto py-24 sm:flex-nowrap">
        {/* Map and Address Column */}
        <div className="lg:w-2/3 md:w-1/2 bg-slate-50 dark:bg-slate-900/50 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border border-slate-200 dark:border-slate-800 transition-colors">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185586.64608004698!2d-80.00472815190449!3d43.381386720053904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b63d2965d93b7%3A0xa44a27764c2b554f!2sBurlington%2C%20ON!5e0!3m2!1sen!2sca!4v1774471311896!5m2!1sen!2sca"
            width="100%"
            height="100%"
            className="absolute inset-0 opacity-70 dark:opacity-100 transition-opacity duration-300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative flex flex-wrap py-6 rounded-lg shadow-2xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transition-colors">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-slate-950 dark:text-white tracking-widest text-xs uppercase">
                Location
              </h2>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                Burlington, Ontario, Canada
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-slate-950 dark:text-white tracking-widest text-xs uppercase">
                Email
              </h2>
              <a
                href="mailto:er.garimasinghal@gmail.com"
                className="text-blue-600 dark:text-blue-400 leading-relaxed hover:text-blue-500 dark:hover:text-blue-300 transition-colors font-medium"
              >
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
          <h2 className="text-foreground text-4xl mb-1 font-bold title-font transition-colors">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-slate-600 dark:text-slate-400 font-medium transition-colors">
            Have a project in mind? Let&apos;s discuss how we can build
            something amazing together.
          </p>

          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-slate-600 dark:text-slate-400 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              value={name}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 text-base outline-none text-slate-900 dark:text-slate-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
              suppressHydrationWarning
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-slate-600 dark:text-slate-400 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
              value={email}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 text-base outline-none text-slate-900 dark:text-slate-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
              suppressHydrationWarning
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-slate-600 dark:text-slate-400 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              value={message}
              rows={4}
              className="w-full bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 text-base outline-none text-slate-900 dark:text-slate-100 py-2 px-4 resize-none leading-6 transition-all duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
              suppressHydrationWarning
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            // aria-busy={status === "loading"}
            className={`flex items-center justify-center space-x-2 text-white bg-blue-600 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95`}
            suppressHydrationWarning
          >
            {status === "loading" ? (
              "Sending..."
            ) : (
              <>
                <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
                <span>Send Message</span>
              </>
            )}
          </button>

          <div
            role="status"
            aria-live="polite"
            className="mt-3 text-center transition-opacity"
          >
            {status === "success" && (
              <p
                id="success-message"
                className="text-blue-600 dark:text-blue-400 text-sm font-bold"
              >
                Form submitted successfully!
              </p>
            )}
            {status === "error" && (
              <p
                id="error-message"
                className="text-red-500 dark:text-red-400 text-sm font-bold"
              >
                Failed to send. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
