export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Mechanical Engineering",
      institute: "Lakshmi Narain College of Technology, Bhopal",
      year: "2019 – 2022",
    },
    {
      degree: "Diploma in Mechanical Engineering",
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
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-purple-200 rounded-full"></div>

        <div className="space-y-10">
          {educationData.map((edu, i) => (
            <div
              key={i}
              className="relative flex items-start gap-6 group"
            >
              {/* Number / Step Circle */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-purple-600 text-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                {i + 1}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-gray-600">{edu.institute}</p>
                <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
