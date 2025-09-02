export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Mechanical Engineering",
      institute: "Lakshmi Narain College of Technology, Bhopal",
      year: "2019 – 2022",
    },
    {
      degree: "Diploma in Mechanical",
      institute: "Shri Vaishnav Polytechnic College, Indore",
      year: "2016 – 2019",
    },
    {
      degree: "High School",
      institute: "Sankalp HSS, Sausar",
      year: "2015 – 2016",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8">Education</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {educationData.map((edu, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institute}</p>
            </div>
            <div className="text-gray-500 font-medium">{edu.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
