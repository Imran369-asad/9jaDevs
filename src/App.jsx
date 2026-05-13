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
