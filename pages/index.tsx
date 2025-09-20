import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Clement VSC - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in modern web technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Sticky Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
          <div className="mx-auto max-w-2xl px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clement VSC
              </h1>
              <div className="hidden md:flex space-x-6">
                <a href="#hero" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About</a>
                <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Skills</a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Projects</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        <main className="font-inter">
          {/* Hero Section */}
          <section id="hero" className="py-20 bg-gradient-to-r from-blue-600/5 to-purple-600/5">
            <div className="mx-auto max-w-2xl px-6 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Full Stack
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Crafting modern web experiences with cutting-edge technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  View Projects
                </a>
                <a href="#contact" className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Get In Touch
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-gradient-to-r from-emerald-50/50 to-teal-50/50">
            <div className="mx-auto max-w-2xl px-6 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">About Me</h3>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-6">
                  I'm a passionate full-stack developer with expertise in modern web technologies.
                  I love creating beautiful, functional applications that solve real-world problems.
                </p>
                <p>
                  With a focus on clean code, user experience, and scalable architecture,
                  I bring ideas to life through thoughtful development and design.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-gradient-to-r from-violet-50/50 to-purple-50/50">
            <div className="mx-auto max-w-2xl px-6 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-12">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
                  'Tailwind CSS', 'MongoDB', 'AWS', 'Docker', 'Git', 'GraphQL'
                ].map((skill) => (
                  <div key={skill} className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-md transition-shadow duration-200">
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-gradient-to-r from-orange-50/50 to-red-50/50">
            <div className="mx-auto max-w-2xl px-6 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h3>
              <div className="space-y-8">
                {[
                  {
                    title: 'E-Commerce Platform',
                    description: 'Full-stack application with React, Node.js, and PostgreSQL',
                    tech: ['React', 'Node.js', 'PostgreSQL']
                  },
                  {
                    title: 'Task Management App',
                    description: 'Real-time collaboration tool with WebSocket integration',
                    tech: ['Next.js', 'Socket.io', 'MongoDB']
                  },
                  {
                    title: 'Portfolio Website',
                    description: 'Responsive portfolio built with modern technologies',
                    tech: ['Next.js', 'Tailwind CSS', 'TypeScript']
                  }
                ].map((project, index) => (
                  <div key={index} className="p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-lg transition-shadow duration-200">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gradient-to-r from-pink-50/50 to-rose-50/50">
            <div className="mx-auto max-w-2xl px-6 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              <p className="text-lg text-gray-600 mb-8">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@clementvsc.dev" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  Send Email
                </a>
                <a href="https://linkedin.com/in/clementvsc" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 bg-gray-900/5 backdrop-blur-sm border-t border-gray-200/20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <p className="text-gray-600">
              © 2024 Clement VSC. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
