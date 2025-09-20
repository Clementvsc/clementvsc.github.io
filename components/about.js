import React from 'react';
import { motion } from 'framer-motion';

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

const About = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="about">
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
  );
};

export default About;
