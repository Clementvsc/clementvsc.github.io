import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

// Sample data structures
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
    description: 'Automated multi-cloud infrastructure deployment using Terraform, featuring auto-scaling, monitoring, and disaster recovery across AWS and Azure environments.',
    technologies: ['Terraform', 'AWS', 'Azure', 'Kubernetes', 'Prometheus', 'Grafana'],
    status: 'completed',
    githubUrl: 'https://github.com/clementvsc/cloud-infra-automation',
    icon: '☁️'
  },
  {
    title: 'Microservices DevOps Pipeline',
    description: 'Complete CI/CD pipeline for microservices architecture with automated testing, security scanning, and blue-green deployments.',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'SonarQube', 'ArgoCD', 'Helm'],
    status: 'completed',
    githubUrl: 'https://github.com/clementvsc/microservices-pipeline',
    icon: '🚀'
  },
  {
    title: 'Python API Gateway',
    description: 'High-performance API gateway built with FastAPI, featuring rate limiting, authentication, request routing, and real-time analytics.',
    technologies: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'JWT'],
    status: 'completed',
    githubUrl: 'https://github.com/clementvsc/python-api-gateway',
    liveUrl: 'https://api-gateway-demo.clementvsc.dev',
    icon: '⚡'
  },
  {
    title: 'Infrastructure Monitoring Suite',
    description: 'Comprehensive monitoring solution with custom dashboards, alerting, and automated incident response for cloud-native applications.',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Python', 'Kubernetes', 'Slack API'],
    status: 'in-progress',
    githubUrl: 'https://github.com/clementvsc/monitoring-suite',
    icon: '📊'
  },
  {
    title: 'Container Security Scanner',
    description: 'Automated container vulnerability scanning and compliance checking tool integrated into CI/CD pipelines.',
    technologies: ['Python', 'Docker', 'Trivy', 'OWASP', 'Jenkins', 'GitLab CI'],
    status: 'completed',
    githubUrl: 'https://github.com/clementvsc/container-security-scanner',
    icon: '🔒'
  },
  {
    title: 'Cloud Cost Optimization Tool',
    description: 'Machine learning-powered tool for analyzing and optimizing cloud resource costs across multiple providers.',
    technologies: ['Python', 'TensorFlow', 'AWS Cost Explorer', 'Azure Cost Management', 'Pandas'],
    status: 'in-progress',
    githubUrl: 'https://github.com/clementvsc/cloud-cost-optimizer',
    icon: '💰'
  }
];

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Head>
          <title>Clement Vsc - DevOps Engineer & Cloud Solutions Architect</title>
          <meta name="description" content="Professional portfolio of Clement Vsc - DevOps Engineer, Cloud Solutions Architect, and Python Developer specializing in automation, scalable infrastructure, and modern cloud technologies." />
          <meta name="keywords" content="devops engineer, cloud solutions, python developer, terraform, kubernetes, aws, azure, automation, microservices, portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Clement Vsc - DevOps Engineer & Cloud Solutions Architect" />
          <meta property="og:description" content="Professional portfolio showcasing expertise in DevOps automation, cloud infrastructure, and Python development." />
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
          <Hero />

          {/* About Section */}
          <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  About Me
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Passionate DevOps Engineer with expertise in cloud infrastructure, automation, and scalable Python solutions. 
                  I build robust systems that drive business growth and operational efficiency.
                </p>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-3xl mb-3">{skill.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  A showcase of my recent work in DevOps automation, cloud infrastructure, and Python development.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-12"
              >
                <a
                  href="/projects"
                  className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  View All Projects
                </a>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  Let's Work Together
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Ready to optimize your infrastructure or automate your workflows? Let's discuss how I can help your team achieve operational excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:clement.vsc@example.com"
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="https://linkedin.com/in/clementvsc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-2">
                © {new Date().getFullYear()} Clement Vsc. Built with Next.js, Tailwind CSS, and Framer Motion.
              </p>
              <p className="text-sm text-gray-400">
                Open to full-time opportunities • Remote/Hybrid/Onsite
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
