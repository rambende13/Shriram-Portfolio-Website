import { FaAws, FaDocker, FaGithub, FaJenkins } from "react-icons/fa";
import { 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible, 
  SiPrometheus, 
  SiGrafana, 
  SiGnubash, 
  SiGooglecloud, 
  SiPython, 
  SiGit, 
  SiLinux, 
  SiSlack, 
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "AWS", icon: <FaAws className="text-[#FF9900] text-5xl" /> },
    { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4] text-5xl" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED] text-5xl" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5] text-5xl" /> },
    { name: "Terraform", icon: <SiTerraform className="text-[#7B42BC] text-5xl" /> },
    { name: "Jenkins", icon: <FaJenkins className="text-[#D33833] text-5xl" /> },
    { name: "Ansible", icon: <SiAnsible className="text-black text-5xl" /> },
    { name: "Prometheus", icon: <SiPrometheus className="text-[#E6522C] text-5xl" /> },
    { name: "Grafana", icon: <SiGrafana className="text-[#F46800] text-5xl" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB] text-5xl" /> },
    { name: "Bash", icon: <SiGnubash className="text-[#4EAA25] text-5xl" /> },
    { name: "Linux", icon: <SiLinux className="text-[#FCC624] text-5xl" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032] text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-[#181717] text-5xl" /> },
    { name: "Slack", icon: <SiSlack className="text-[#4A154B] text-5xl" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">⚡ Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 text-center px-6">
        {skills.map((s, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-110 transition transform duration-300"
          >
            {s.icon}
            <p className="mt-3 text-lg font-semibold">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
