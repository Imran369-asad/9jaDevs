import { Routes, Route, Link } from "react-router-dom";

      {/* CATEGORIES */}
 
   (  <div>
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
              React, Next.js, Tailwind and modern UI experts.
            </p>
          </div>

          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6 hover:border-green-500 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Backend Engineers
            </h3>

            <p className="text-gray-400">
              Node.js, APIs, databases and scalable systems.
            </p>
          </div>

          <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-6 hover:border-green-500 transition">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Mobile Developers
            </h3>

            <p className="text-gray-400">
              Flutter and React Native app development.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-10 border-t border-green-500/10 text-center">
        <h3 className="text-2xl font-bold mb-4">
          How it works
        </h3>

        <p className="text-gray-400">
          Clients send requests via email. Developers apply via WhatsApp or email. We handle the matching.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-6 border-t border-green-500/10 text-center text-gray-500">
        © 2026 9jaDevs. All rights reserved.
      </footer>

    </div>
  );

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/developers" element={<Developers />} />
    </Routes>
  );
}