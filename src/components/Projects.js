import { FaAws, FaDocker, FaJenkins } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiAnsible, SiPython } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "VYU Tool",
      role: "DevOps Engineer",
      duration: "Apr 2025 – Present",
      tech: [<FaAws />, <SiTerraform />, <FaDocker />, <SiKubernetes />, <FaJenkins />],
      details: [
        "Built reusable Terraform modules for multi-account AWS deployments (reduced infra setup by 60%).",
        "Automated CI/CD with Bitbucket Pipelines & optimized deployments (cut time by 40–50%).",
        "Designed ECS cluster with auto-scaling for high availability.",
        "Used Blue-Green & Canary deployments for zero downtime."
      ]
    },
    {
      title: "MyFroyoLand Mobile Application",
      role: "DevOps Engineer",
      duration: "Mar 2025 – Present",
      tech: [<FaAws />, <SiTerraform />, <SiPython />],
      details: [
        "Provisioned infra using Terraform (S3, Lambda, API Gateway).",
        "Implemented serverless architecture → reduced infra costs by 25%.",
        "Built clean, production-ready infra with no CI/CD dependency."
      ]
    },
    {
      title: "Proeffective IT Services Portal",
      role: "Cloud Infra Engineer",
      duration: "Mar 2025 – Present",
      tech: [<FaAws />, <SiTerraform />],
      details: [
        "Built infra on AWS S3 for company website.",
        "Enabled backend with Lambda + API Gateway.",
        "Terraform for repeatable infra provisioning."
      ]
    },
    {
      title: "CI/CD for Java Application",
      role: "DevOps Engineer (Training)",
      duration: "Training Project",
      tech: [<FaDocker />, <SiKubernetes />, <FaJenkins />, <SiAnsible />],
      details: [
        "Implemented CI/CD with Jenkins, Maven, SonarQube.",
        "Automated Docker builds → pushed to AWS ECR.",
        "Deployed on Kubernetes using Helm charts.",
        "Slack integrated for build/deploy notifications."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">🚀 Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col border-l-4 border-blue-500 transition-transform hover:scale-105"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">{p.title}</h3>
              <p className="text-gray-500">{p.role}</p>
              <p className="text-sm text-gray-400">{p.duration}</p>
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 flex-1">
              {p.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            <div className="flex gap-3 text-2xl mt-2 text-blue-500">
              {p.tech.map((icon, k) => (
                <span key={k}>{icon}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
