export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* NAV */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-green-500/20">
        <h1 className="text-2xl font-bold text-green-400">9jaDevs</h1>
        <a
          href="mailto:9jadevs@gmail.com"
          className="px-4 py-2 border border-green-500 rounded-lg hover:bg-green-500 hover:text-black transition"
        >
          Contact Us
        </a>
      </nav>

      {/* HERO */}
      <section className="flex flex-1 items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl font-bold mb-4">
            Hire Developers Easily
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            9jaDevs connects you with skilled developers. Send your project request via email, and we will match you with the right talent.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:9jadevs@gmail.com?subject=Hire%20a%20Developer"
              className="px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition"
            >
              Hire a Developer (Email Us)
            </a>

            <a
              href="https://wa.me/2340000000000"
              className="px-6 py-3 border border-green-500 rounded-xl hover:bg-green-500 hover:text-black transition"
            >
              Apply as Developer (WhatsApp)
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
<section className="px-6 py-16 bg-zinc-950">
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

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold">
            David Johnson
          </h3>

          <span className="text-xs bg-green-500 text-black px-3 py-1 rounded-full font-bold">
            Available
          </span>
        </div>

        <p className="text-green-400 mb-3">
          Frontend Developer
        </p>

        <p className="text-gray-400 mb-4">
          4+ years experience building React and Next.js applications.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-black px-3 py-1 rounded-full text-sm">
            React
          </span>

          <span className="bg-black px-3 py-1 rounded-full text-sm">
            Next.js
          </span>

          <span className="bg-black px-3 py-1 rounded-full text-sm">
            Tailwind
          </span>
        </div>

        <a
          href="mailto:9jadevs@gmail.com?subject=Hire David Johnson"
          className="block text-center bg-green-500 text-black py-3 rounded-xl font-bold hover:bg-green-400 transition"
        >
          Hire Developer
        </a>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-zinc-900 border border-green-500/20 rounded-3xl overflow-hidden hover:border-green-500 transition">

      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000"
        alt="Developer"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold">
            Aisha Bello
          </h3>

          <span className="text-xs bg-green-500 text-black px-3 py-1 rounded-full font-bold">
            Available
          </span>
        </div>

        <p className="text-green-400 mb-3">
          Backend Engineer
        </p>

        <p className="text-gray-400 mb-4">
          Expert in Node.js APIs, databases and scalable backend systems.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-black px-3 py-1 rounded-full text-sm">
            Node.js
          </span>

          <span className="bg-black px-3 py-1 rounded-full text-sm">
            MongoDB
          </span>

          <span className="bg-black px-3 py-1 rounded-full text-sm">
            Express
          </span>
        </div>

        <a
          href="mailto:9jadevs@gmail.com?subject=Hire Aisha Bello"
          className="block text-center bg-green-500 text-black py-3 rounded-xl font-bold hover:bg-green-400 transition"
        >
          Hire Developer
        </a>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-zinc-900 border border-green-500/20 rounded-3xl overflow-hidden hover:border-green-500 transition">

      <img
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000"
        alt="Developer"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold">
            Michael James
          </h3>

          <span className="text-xs bg-green-500 text-black px-3 py-1 rounded-full font-bold">
            Available
          </span>
        </div>

        <p className="text-green-400 mb-3">
          Mobile App Developer
        </p>

        <p className="text-gray-400 mb-4">
          Flutter and React Native developer building modern mobile apps.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-black px-3 py-1 rounded-full text-sm">
            Flutter
          </span>

          <span className="bg-black px-3 py-1 rounded-full text-sm">
            React Native
          </span>

          <span className="bg-black px-3 py-1 rounded-full text-sm">
            Firebase
          </span>
        </div>

        <a
          href="mailto:9jadevs@gmail.com?subject=Hire Michael James"
          className="block text-center bg-green-500 text-black py-3 rounded-xl font-bold hover:bg-green-400 transition"
        >
          Hire Developer
        </a>
      </div>
    </div>

  </div>
</section>
      {/* HOW IT WORKS */}
      <section className="px-6 py-10 border-t border-green-500/10 text-center">
        <h3 className="text-2xl font-bold mb-4">How it works</h3>
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
}
