'use client';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function Projects() {
  const projects = [
    {
      title: "Smart Bridge Monitoring System",
      description: "An IoT-based system that monitors bridge structural health in real-time. Uses sensors to detect vibrations, stress levels, and environmental conditions to ensure safety.",
      tech: ["IoT", "Embedded Systems", "Sensors", "Real-time Monitoring"],
      image: "/images/projects/bridge-monitoring.jpg"
    },
    {
      title: "Smart Bin System",
      description: "An automated waste management solution that optimizes collection routes and monitors fill levels. Features include real-time tracking and automated notifications.",
      tech: ["IoT", "Automation", "Sensors", "Mobile App"],
      image: "/projects/bin.jpg", 
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and TailwindCSS. Features server-side rendering and modern design principles.",
      tech: ["Next.js", "React", "TailwindCSS", "TypeScript"],
      image: "/projects/portfolio.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="https://github.com/Emmanuel-Rodgers" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer">
            <span>View More Projects on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Add this at the end of the file to enable client-side navigation
export const dynamic = 'force-dynamic';