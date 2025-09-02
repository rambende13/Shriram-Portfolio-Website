import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent)]"></div>
      
      <motion.img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="profile"
        className="rounded-full w-40 h-40 border-4 border-white shadow-2xl hover:scale-105 transition"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-6xl md:text-7xl font-extrabold mt-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Hi, I’m <span className="text-yellow-300">Shriram</span> 👋
      </motion.h1>

      <p className="mt-4 text-xl md:text-2xl text-gray-200 text-center max-w-2xl">
        DevOps Engineer | Cloud Enthusiast | Passionate about Automation 🚀
      </p>

      {/* Call to Action */}
      <div className="mt-8 flex gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
