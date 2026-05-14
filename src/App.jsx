import { useState } from "react";

export default function App() {
  const [showDevelopers, setShowDevelopers] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* NAV */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-green-500/20">
        <h1 className="text-2xl font-bold text-green-400">
          9jaDevs
        </h1>

        <a
          href="mailto:9jadevs@gmail.com"
          className="px-4 py-2 border border-green-500 rounded-lg hover:bg-green-500 hover:text-black transition"
        >
          Contact Us
        </a>
      </nav>

      {/* HERO */}
      <section className="flex flex-1 items-center justify-center text-center px-6 py-24">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Hire Developers Easily
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            9jaDevs connects you with skilled developers across frontend,
            backend, mobile, cybersecurity and AI.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

      <button
          onClick={() => {
          document.getElementById("contact")?.scrollIntoView({
         behavior: "smooth",
         });
         }}
         className="px-4 py-2 border border-green-500 rounded-lg hover:bg-green-500 hover:text-black transition">
         Contact Us
      </button>

            <a
              href="https://wa.me/2340000000"
              className="px-6 py-3 border border-green-500 rounded-xl hover:bg-green-500 hover:text-black transition"
            >
              Apply as Developer
            </a>

          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Explore Developer Categories
          </h2>

          <p className="text-gray-400">
            Hire skilled tech talents for any type of project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6 hover:border-green-500 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Frontend Developers
            </h3>

            <p className="text-gray-400">
              React, Next.js, Tailwind, Vue and modern UI experts.
            </p>
          </div>

          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6 hover:border-green-500 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Backend Engineers
            </h3>

            <p className="text-gray-400">
              Node.js, Express, APIs, databases and scalable systems.
            </p>
          </div>

          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6 hover:border-green-500 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Mobile Developers
            </h3>

            <p className="text-gray-400">
              Flutter, React Native and Android/iOS app development.
            </p>
          </div>

          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6 hover:border-green-500 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              UI/UX Designers
            </h3>

            <p className="text-gray-400">
              Modern interfaces, product design and user experiences.
            </p>
          </div>

          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6 hover:border-green-500 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Cybersecurity Experts
            </h3>

            <p className="text-gray-400">
              Security audits, penetration testing and infrastructure security.
            </p>
          </div>

          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6 hover:border-green-500 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              AI Engineers
            </h3>

            <p className="text-gray-400">
              AI automation, machine learning and chatbot integration.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURED DEVELOPERS */}
      {showDevelopers && (
        <section id="developers" className="px-6 py-16 bg-zinc-950">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Featured Developers
            </h2>

            <p className="text-gray-400">
              Meet skilled developers available for your projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-zinc-900 border border-green-500/20 rounded-3xl overflow-hidden hover:border-green-500 transition">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000"
                alt="Developer"
                className="w-full h-64 object-cover"
              />
            </div>

          </div>
        </section>
      )}

      {/* CLIENT REQUEST FORM */}
      <section
        id="contact"
        className="px-6 py-20 bg-black border-t border-green-500/10">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-green-400">
              Start Your Project
            </h2>
          </div>

        </div>
      </section>

      {/* POPUP CONTACT FORM */}
      {showContact && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center px-4">

          <div className="bg-zinc-900 w-full max-w-xl p-6 rounded-xl border border-green-500/20">

            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold text-green-400">
                Contact 9jaDevs
              </h2>

              <button
                onClick={() => setShowContact(false)}
                className="text-red-400"
              >
                X
              </button>
            </div>

            <form
              action="https://formsubmit.co/9jadevs@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />

              <input
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-black border border-green-500/20 rounded"
                required
              />

              <input
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-black border border-green-500/20 rounded"
                required
              />

              <textarea
                name="message"
                placeholder="What do you need?"
                className="w-full p-3 bg-black border border-green-500/20 rounded"
                rows="5"
                required
              />

              <button
                type="submit"
                className="w-full bg-green-500 text-black py-3 rounded font-bold"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}