'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [imageError, setImageError] = useState(false);
  const specializations = [
    {
      title: "IoT Development",
      description: "Creating smart, connected solutions for real-world problems using IoT technologies and sensors.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "Embedded Systems",
      description: "Developing efficient embedded solutions for hardware-software integration challenges.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description: "Building modern, responsive web applications using cutting-edge technologies.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 sm:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl font-bold text-blue-700 mb-6">
                Hello, I'm<br />Emmanuel Mwale
              </h1>
              <p className="text-xl font-medium text-gray-700 mb-6">Computer Engineering Graduate</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A versatile and motivated engineer specializing in IoT systems, embedded programming, and web development. 
                Passionate about creating innovative solutions that make a difference.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 relative rounded-full overflow-hidden border-8 border-blue-200 shadow-xl">
                {imageError ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-8xl text-blue-500 font-bold">EM</span>
                  </div>
                ) : (
                  <Image
                    src="/images/profile.jpg"
                    alt="Emmanuel Mwale profile photo"
                    fill
                    sizes="256px"
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm rounded-3xl shadow-lg mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">What I Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specializing in creating innovative solutions that combine hardware and software expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {specializations.map((spec, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{spec.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{spec.title}</h3>
                <p className="text-gray-600">{spec.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Overview */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Skills Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit that enables me to tackle diverse engineering challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Java", "C", "C++", "Python", "PHP"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["IoT", "Embedded Systems", "Web Development", "Sensors", "Automation"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Adobe Photoshop", "Adobe Illustrator", "MS Office", "Git", "VS Code"].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
            <p className="text-xl mb-8">Let's work together to bring your ideas to life</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 mt-20 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Emmanuel Mwale</p>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/emmanuel-mwale-a13041204/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Emmanuel-Rodgers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
