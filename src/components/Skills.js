import { 
  FaAws, FaDocker, FaGithub, FaReact, FaFileWord, FaFileExcel, FaFilePowerpoint 
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiBitbucket,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiLinux,
  SiGnubash,
  SiPython,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiSlack,
  SiJira,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "DevOps & Cloud",
      items: [
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
        { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
        { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
        { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
        { name: "Grafana", icon: SiGrafana, color: "#F46800" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
      ],
    },
    {
      title: "Frontend & Development",
      items: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
        { name: "Jira", icon: SiJira, color: "#0052CC" },
      ],
    },
    {
      title: "AI & Automation",
      items: [
        { name: "Prompt Engineering", icon: SiAnsible, color: "#EE0000" },
      ],
    },
    {
      title: "Productivity",
      items: [
        { name: "Word", icon: FaFileWord, color: "#2B579A" },
        { name: "Excel", icon: FaFileExcel, color: "#217346" },
        { name: "PowerPoint", icon: FaFilePowerpoint, color: "#D24726" },
        { name: "Slack", icon: SiSlack, color: "#4A154B" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      {/* Categories in one grid (no need to scroll much) */}
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-4 md:grid-cols-2 px-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center border-b pb-2">
              {cat.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-6 place-items-center">
              {cat.items.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-gray-50 shadow-sm group-hover:shadow-lg transform group-hover:scale-110 transition duration-300">
                    <Icon className="text-3xl" style={{ color }} />
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-600 group-hover:text-gray-900 text-center">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
