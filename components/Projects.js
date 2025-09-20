import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

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

const Projects = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="projects">
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
  );
};

export default Projects;
