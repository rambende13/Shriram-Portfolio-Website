export default function Experience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Proeffective IT Service Cloud Enabled",
      duration: "Feb 2025 – Present",
      description: [
        "Built and maintained CI/CD pipelines for multiple environments.",
        "Automated AWS infrastructure provisioning, reducing deployment time by 50%.",
        "Monitored system performance using Grafana, Prometheus, and CloudWatch.",
        "Collaborated with developers for scalable cloud solutions."
      ]
    },
    {
      title: "AWS DevOps Training",
      company: "Naresh IT, Hyderabad",
      duration: "Jan 2023 – Jun 2023",
      description: [
        "Hands-on AWS services: EC2, S3, Lambda, VPC, IAM, Route 53.",
        "Built CI/CD pipelines using Jenkins, Docker, Kubernetes.",
        "Implemented Infrastructure as Code using Terraform.",
        "Learned monitoring, logging, and cost optimization best practices.",
        "Completed capstone projects simulating production-level DevOps workflows."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-blue-500"></div>

        <ul className="space-y-12">
          {experiences.map((exp, i) => (
            <li key={i} className="flex items-start relative">
              {/* Dot */}
              <div className="flex flex-col items-center mr-6">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
                <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-gray-500 mb-4">{exp.company} | {exp.duration}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.description.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
