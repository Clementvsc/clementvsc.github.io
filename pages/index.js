import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

// Dynamic imports for components
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
const Skills = dynamic(() => import('../components/Skills'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Head>
          <title>Clement Vsc - Full Stack Developer & DevOps Engineer</title>
          <meta name="description" content="Professional portfolio of Clement Vsc - Full Stack Developer, DevOps Engineer, and Cloud Solutions Architect specializing in modern web technologies, automation, and scalable infrastructure." />
          <meta name="keywords" content="full stack developer, devops engineer, cloud solutions, terraform, kubernetes, python, react, nextjs, portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Clement Vsc - Full Stack Developer & DevOps Engineer" />
          <meta property="og:description" content="Professional portfolio showcasing expertise in full stack development, DevOps automation, and cloud infrastructure." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://clementvsc.github.io" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://clementvsc.github.io" />
        </Head>

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Hero Section */}
          <section id="home">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-16">
            <About />
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-16">
            <Skills />
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-16">
            <Projects />
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-16">
            <Contact />
          </section>
        </motion.main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>&copy; {new Date().getFullYear()} Clement Vsc. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
              <p className="mt-2 text-sm">Open to full-time opportunities • Remote/Hybrid/Onsite</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
