import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

// Static data - no dynamic imports or async fetching
const skills = [
  { name: 'Python', level: 90, category: 'backend', icon: '🐍' },
  { name: 'JavaScript/TypeScript', level: 85, category: 'fullstack', icon: '⚡' },
  { name: 'React/Next.js', level: 88, category: 'frontend', icon: '⚛️' },
  { name: 'Docker', level: 92, category: 'devops', icon: '🐳' },
  { name: 'Kubernetes', level: 85, category: 'devops', icon: '☸️' },
  { name: 'Terraform', level: 88, category: 'devops', icon: '🏗️' },
  { name: 'AWS/Azure', level: 90, category: 'cloud', icon: '☁️' },
  { name: 'CI/CD Pipelines', level: 92, category: 'devops', icon: '🔄' },
  { name: 'Microservices', level: 87, category: 'architecture', icon: '🏛️' },
  { name: 'PostgreSQL', level: 85, category: 'database', icon: '🐘' }
];

const projects = [
  {
    title: 'Cloud Infrastructure Automation',
    description:
      'Automated multi-cloud infrastructure with Terraform, auto-scaling, monitoring, and DR across AWS/Azure.',
    technologies: ['Terraform', 'AWS', 'Azure', 'Kubernetes', 'Prometheus', 'Grafana'],
    status: 'completed',
    githubUrl: 'https://github.com/clementvsc/cloud-infra-automation',
    liveUrl: 'https://infra-demo.clementvsc.dev',
    icon: '☁️'
  },
  {
    title: 'Microservices DevOps Pipeline',
    description:
      'End-to-end CI/CD for microservices with testing, security scanning, and blue-green deployments.',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'SonarQube', 'ArgoCD', 'Helm'],
    status: 'completed',
    githubUrl: 'https://github.com/clementvsc/microservices-pipeline',
    icon: '🚀'
  },
  {
    title: 'Python API Gateway',
    description:
      'FastAPI-based API gateway with auth, rate limiting, routing, and real-time analytics.',
    technologies: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'JWT'],
    status: 'completed',
    githubUrl: 'https://github.com/clementvsc/python-api-gateway',
    liveUrl: 'https://api-gateway-demo.clementvsc.dev',
    icon: '⚡'
  }
];

// Client-side wrapper for Framer Motion to avoid SSR issues
const ClientMotionDiv = ({ children, ...motionProps }) => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div>{children}</div>;
  }
  
  return <motion.div {...motionProps}>{children}</motion.div>;
};

// Navigation component - statically rendered
const Nav = () => (
  <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200/60 dark:border-gray-800">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-14">
        <a className="font-semibold text-gray-900 dark:text-white" href="#hero">Clement Vsc</a>
        <div className="hidden sm:flex items-center gap-6">
          {['hero','about','projects','contact'].map((id) => (
            <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href={`#${id}`} key={id}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <a className="hidden sm:inline-flex px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700" href="#contact">Hire me</a>
      </div>
    </nav>
  </header>
);

// Main component with all sections statically imported
export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 text-gray-900 dark:text-gray-100 scroll-smooth">
        <Head>
          <title>Clement Vsc - DevOps Engineer & Cloud Solutions Architect</title>
          <meta name="description" content="Portfolio of Clement Vsc - DevOps, Cloud, and Python engineering." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <style>{`html{scroll-behavior:smooth}`}</style>
        </Head>
        
        <Nav />
        
        <main className="relative">
          {/* Hero Section - Static Import */}
          <section className="pt-8 sm:pt-12" id="hero">
            <Hero />
          </section>
          
          {/* About + Skills Section - Static with Client Motion */}
          <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ClientMotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  DevOps Engineer focused on cloud infrastructure, automation, and scalable Python systems.
                </p>
              </ClientMotionDiv>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                  <ClientMotionDiv
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg text-center"
                  >
                    <div className="text-2xl sm:text-3xl mb-2">{skill.icon}</div>
                    <h3 className="font-semibold mb-2">{skill.name}</h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <div className="mt-1 text-xs text-gray-600 dark:text-gray-300">{skill.level}%</div>
                  </ClientMotionDiv>
                ))}
              </div>
            </div>
          </section>
          
          {/* Projects Section - Static with Client Motion */}
          <section className="py-16 sm:py-20" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ClientMotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Fully clickable cards with Code and Live Demo links.
                </p>
              </ClientMotionDiv>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
              
              <ClientMotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mt-10"
              >
                <a
                  href="/projects"
                  className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View All Projects
                </a>
              </ClientMotionDiv>
            </div>
          </section>
          
          {/* Contact Section - Static with Client Motion */}
          <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <ClientMotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Reach me via email or LinkedIn. I respond quickly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="mailto:hello@clementvsc.dev"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    ✉️ Email Me
                  </a>
                  <a
                    href="https://linkedin.com/in/clementvsc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    💼 LinkedIn
                  </a>
                </div>
              </ClientMotionDiv>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="mb-2">© {new Date().getFullYear()} Clement Vsc. Built with Next.js, Tailwind, Framer Motion.</p>
            <div className="flex justify-center gap-5 text-sm">
              <a className="hover:text-white transition-colors" href="#hero">Hero</a>
              <a className="hover:text-white transition-colors" href="#about">About</a>
              <a className="hover:text-white transition-colors" href="#projects">Projects</a>
              <a className="hover:text-white transition-colors" href="#contact">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
