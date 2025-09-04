import { FaAws, FaDocker, FaJenkins } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiAnsible, SiPython } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "VYU Tool",
      role: "DevOps Engineer",
      duration: "Apr 2025 – Present",
      tech: [FaAws, SiTerraform, FaDocker, SiKubernetes, FaJenkins],
      details: [
        "Built reusable Terraform modules for multi-account AWS deployments (reduced infra setup by 60%).",
        "Automated CI/CD with Bitbucket Pipelines (cut deployment time by 40–50%).",
        "Designed ECS cluster with auto-scaling for high availability.",
        "Implemented Blue-Green & Canary deployments for zero downtime."
      ],
      tags: ["AWS ECS","ECR","Docker","BitBucket Pipeline","Terraform", ],
    },
    {
      title: "MyFroyoLand Mobile Application",
      role: "DevOps Engineer",
      duration: "Mar 2025 – Present",
      tech: [FaAws, SiTerraform, SiPython],
      details: [
        "Provisioned infra using Terraform (S3, Lambda, API Gateway).",
        "Implemented serverless architecture → reduced infra costs by 25%.",
        "Built production-ready infra with no CI/CD dependency."
      ],
      tags: ["AWS Lambda","S3","API Gateway","BitBucket Pipeline", "Terraform"],
    },
    {
      title: "Proeffective IT Services Portal",
      role: "Cloud Infra Engineer",
      duration: "Mar 2025 – Present",
      tech: [FaAws, SiTerraform],
      details: [
        "Built infra on AWS S3 for company website.",
        "Enabled backend with Lambda + API Gateway.",
        "Used Terraform for repeatable infra provisioning."
      ],
      tags: ["AWS Lambda","S3","API Gateway","BitBucket Pipeline", "Terraform"],
    },
    {
      title: "CI/CD for Java Application",
      role: "DevOps Engineer (Training)",
      duration: "Training Project",
      tech: [FaDocker, SiKubernetes, FaJenkins, SiAnsible],
      details: [
        "Implemented CI/CD with Jenkins, Maven, SonarQube.",
        "Automated Docker builds → pushed to AWS ECR.",
        "Deployed on Kubernetes using Helm charts.",
        "Integrated Slack for build/deploy notifications."
      ],
      tags: ["AWS","Docker","Kubernetes","Jenkins","Terraform","SonarQube","Helm","Ansible"],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">🚀 Projects</h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 border-t-4 border-blue-500 transition-transform hover:-translate-y-2 duration-300"
          >
            {/* Title & Role */}
            <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
            <p className="text-sm text-gray-500">{p.role}</p>
            <p className="text-xs text-gray-400 mb-4">{p.duration}</p>

            {/* Details */}
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm">
              {p.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
