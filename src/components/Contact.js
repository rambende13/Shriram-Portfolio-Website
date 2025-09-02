import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const links = [
  { icon: FaEnvelope, url: "mailto:rambende130@gmail.com", color: "hover:text-yellow-300" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/shriram-bende-09/", color: "hover:text-blue-300" },
  { icon: FaGithub, url: "https://github.com/rambende13", color: "hover:text-gray-300" },
  { icon: FaTwitter, url: "https://x.com/shriram049", color: "hover:text-sky-300" },
];

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center" id="contact">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-8 text-lg">Let’s collaborate and build something amazing 🚀</p>
      <div className="flex justify-center space-x-8 text-4xl">
        {links.map(({ icon: Icon, url, color }, i) => (
          <a key={i} href={url} target="_blank" rel="noreferrer" className={color}><Icon /></a>
        ))}
      </div>
    </section>
  );
}
