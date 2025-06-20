import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    
    <nav className={`${
        isHome
          ? "bg-transparent text-white"
          : "bg-emerald-50 text-emerald-700 shadow-sm border-b border-emerald-100"
      } fixed top-0 w-full z-50 transition-all duration-300`}>

      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-emerald-100">
        </Link>
        <div className={`flex gap-10 font-extrabold ${
            isHome ? "text-white" : "text-emerald-700"
          }`}>
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <Link to="/projects" className="hover:text-emerald-400">Projects</Link>
          <Link to="/blog" className="hover:text-emerald-400">Blog</Link>
          <Link to="/contact" className="hover:text-emerald-400">Contact</Link>
        </div>
      </div>
    </nav>

  );
}

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center text-white bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/trees.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">GreenFuture KE</h1>
          <p className="text-lg md:text-xl font-extrabold mb-6">
            Act Now for a Greener Tomorrow
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/projects" className="bg-emerald-500 hover:bg-emerald-700 text-white px-6 py-3 rounded-full shadow-lg transition">
              Explore Our Work
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-emerald-700 px-6 py-3 rounded-full shadow hover:shadow-lg transition"
            >
              Donate
            </button>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Support Our Mission 💚</h2>
            <p className="mb-4 text-sm text-gray-700">
              Every donation plants a tree, lights a village or fuels innovation.
            </p>
            <p className="mb-4 text-sm text-gray-700">
              Use M-Pesa Paybill 123456, A/C: GreenFuture
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </main>
  );
}

function Projects() {
  const projects = [
    {
      title: "Mangrove Restoration – Lamu",
      desc: "Rehabilitating 500 ha of degraded coastline with community‑led nurseries."
    },
    {
      title: "Solar for Schools",
      desc: "Off‑grid solar installations powering 80 rural schools and reducing diesel use."
    },
    {
      title: "Waste‑to‑Value Hubs",
      desc: "Converting market organic waste into bio‑fertilizer and biogas."
    },
  ];

  return (
    <main className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12 text-emerald-700 text-center">Our Project Portfolio</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p) => (
          <div key={p.title} className="p-6 bg-white rounded-xl shadow hover:shadow-md">
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{p.desc}</p>
            <button className="text-emerald-600 hover:underline text-sm">Learn More →</button>
          </div>
        ))}
      </div>
    </main>
  );
}

// Blog Page
function Blog() {
  const posts = [
    {
      title: "How Trees Fight Climate Change",
      desc: "Discover the science behind carbon sequestration and how reforestation helps our planet.",
      image: "/assets/forest.jpg",
    },
    {
      title: "Community Power: Local Solutions",
      desc: "How grassroots innovation is reshaping climate resilience in East Africa.",
      image: "/assets/community.jpg",
    },
    {
      title: "Going Solar: Real Impact Stories",
      desc: "Voices from rural schools benefiting from sustainable solar power.",
      image: "/assets/school.jpg",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-emerald-700">Green Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-sm mb-4 text-gray-600">{post.desc}</p>
              <button className="text-emerald-600 font-medium hover:underline">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


// Contact Page
function Contact() {
  return (
    <main className="bg-white text-emerald-700 py-20 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Work Together
        </h1>
        <p className="mb-8 text-emerald-700">
          Whether you’re a donor, volunteer, or just want to say hi — drop us a message.
        </p>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="grid gap-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <button
            type="submit"
            className="bg-white text-emerald-600 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
