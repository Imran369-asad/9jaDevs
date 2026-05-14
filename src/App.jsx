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

        {/* OPEN POPUP */}
        <button
          onClick={() => setShowContact(true)}
          className="px-4 py-2 border border-green-500 rounded-lg hover:bg-green-500 hover:text-black transition"
        >
          Contact Us
        </button>
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
              onClick={() => setShowDevelopers(true)}
              className="px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition"
            >
              Browse Developers
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

      {/* CATEGORIES (unchanged) */}
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
          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6">
            Frontend Developers
          </div>
          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6">
            Backend Engineers
          </div>
          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6">
            Mobile Developers
          </div>
        </div>
      </section>

      {/* DEVELOPERS SECTION */}
      {showDevelopers && (
        <section className="px-6 py-16 bg-zinc-950">
          <h2 className="text-3xl text-center mb-8">Featured Developers</h2>

          <div className="text-center">
            <button
              onClick={() => setShowDevelopers(false)}
              className="mb-6 text-sm text-red-400"
            >
              Close
            </button>
          </div>

          <p className="text-center text-gray-400">
            (Your developer cards stay here)
          </p>
        </section>
      )}

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

      {/* FOOTER */}
      <footer className="px-6 py-6 border-t border-green-500/10 text-center text-gray-500">
        © 2026 9jaDevs. All rights reserved.
      </footer>

    </div>
  );
}