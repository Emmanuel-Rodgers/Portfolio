export default function About() {
  const experience = [
    {
      title: "Academic Projects",
      period: "2020-2025",
      description: "Led and contributed to multiple projects focusing on IoT, embedded systems, and web development during my time at The Copperbelt University.",
    },
    {
      title: "Self-Directed Learning",
      period: "2014-Present",
      description: "Continuously expanding knowledge in modern web technologies, embedded systems, and IoT through online courses and personal projects.",
    },
  ];

  const achievements = [
    "ICTAZ Member Certification (2014-2018)",
    "Academic Excellence in Computer Engineering",
    "Successfully completed multiple IoT and embedded systems projects",
    "Proficient in multiple programming languages and frameworks",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">About Me</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Professional Journey</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a Computer Engineering graduate from The Copperbelt University, I've developed a strong foundation in both hardware and software development. My passion lies in creating innovative solutions that bridge the gap between physical and digital systems, particularly in IoT and embedded systems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I'm particularly interested in developing solutions that can make a positive impact on society, whether through smart city initiatives, environmental monitoring systems, or innovative web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "Java", "C", "C++", "Python", "PHP"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-2">Tools & Software</h3>
                <div className="flex flex-wrap gap-2">
                  {["Adobe Photoshop", "Adobe Illustrator", "MS Office", "VS Code", "Git"].map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Education & Certifications</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-blue-700">Bachelor of Computer Engineering</h3>
                <p className="text-gray-600">The Copperbelt University, Kitwe, Zambia</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-700">ICTAZ Member Certification</h3>
                <p className="text-gray-600">2014 - 2018</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-700">Secondary Education</h3>
                <p className="text-gray-600">Nalituwe Secondary School, Livingstone (2020 - 2025)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Experience Timeline</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-200 rounded-full left-[-9px] top-1"></div>
                <h3 className="text-lg font-medium text-blue-700">{exp.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}