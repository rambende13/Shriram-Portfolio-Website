"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed mb-6"
          >
            I’m a <span className="font-semibold text-gray-800">DevOps Engineer</span> 
            with hands-on experience in automation, cloud infrastructure, and CI/CD pipelines.  
            Alongside DevOps, I actively build <span className="font-semibold text-gray-800">
            React applications</span>, giving me a strong understanding of both 
            development and operations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            I enjoy solving infrastructure challenges, experimenting with modern 
            frameworks, and bridging the gap between code and cloud. Whether it’s 
            automating deployments, building interactive UIs, or improving workflows, 
            I’m passionate about learning, creating, and continuously improving.
          </motion.p>
        </motion.div>

        {/* Right: Illustration / Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&q=80&w=600&fit=crop"
            alt="Tech Illustration"
            className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
