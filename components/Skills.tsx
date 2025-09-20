import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills: Skill[] = [
    // Cloud & DevOps
    { name: 'AWS', level: 85, icon: '☁️', category: 'Cloud' },
    { name: 'Docker', level: 80, icon: '🐳', category: 'DevOps' },
    { name: 'Kubernetes', level: 75, icon: '⚓', category: 'DevOps' },
    { name: 'Terraform', level: 70, icon: '🏗️', category: 'DevOps' },
    { name: 'Jenkins', level: 75, icon: '🔧', category: 'DevOps' },
    { name: 'Azure', level: 65, icon: '☁️', category: 'Cloud' },
    
    // JavaScript & Frontend
    { name: 'JavaScript', level: 90, icon: '🟨', category: 'Frontend' },
    { name: 'TypeScript', level: 85, icon: '🔷', category: 'Frontend' },
    { name: 'React', level: 90, icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', level: 85, icon: '💚', category: 'Backend' },
    { name: 'Next.js', level: 80, icon: '▲', category: 'Frontend' },
    { name: 'Vue.js', level: 75, icon: '💚', category: 'Frontend' },
    
    // Backend & Database
    { name: 'Python', level: 85, icon: '🐍', category: 'Backend' },
    { name: 'MongoDB', level: 80, icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', level: 75, icon: '🐘', category: 'Database' },
    { name: 'GraphQL', level: 70, icon: '🔗', category: 'Backend' }
  ];

  const categories = ['Cloud', 'DevOps', 'Frontend', 'Backend', 'Database'];
  const categoryColors = {
    Cloud: 'from-blue-500 to-cyan-500',
    DevOps: 'from-orange-500 to-red-500',
    Frontend: 'from-green-500 to-teal-500',
    Backend: 'from-purple-500 to-pink-500',
    Database: 'from-yellow-500 to-orange-500'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise in modern cloud technologies, DevOps practices, and full-stack development
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          
          return (
            <motion.div
              key={category}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
              className="mb-12"
            >
              <motion.h3
                variants={itemVariants}
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} bg-clip-text text-transparent`}
              >
                {category}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    custom={skillIndex}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl" role="img" aria-label={skill.name}>
                          {skill.icon}
                        </span>
                        <h4 className="text-lg font-semibold text-white">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={isVisible ? "visible" : "hidden"}
                          className={`h-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                      
                      {/* Animated particles */}
                      <div className="absolute -top-1 left-0 w-full h-5 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            animate={{
                              x: [0, 100, 0],
                              opacity: [0, 1, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5 + skillIndex * 0.1
                            }}
                            style={{
                              left: `${Math.random() * (skill.level)}%`,
                              top: `${Math.random() * 10}px`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Skill badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.level >= 80 && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                          Expert
                        </span>
                      )}
                      {skill.level >= 70 && skill.level < 80 && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          Advanced
                        </span>
                      )}
                      {skill.level < 70 && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                          Intermediate
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
        
        {/* Interactive skill summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const categorySkills = skills.filter(skill => skill.category === category);
                const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
                
                return (
                  <motion.div
                    key={category}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} bg-clip-text text-transparent`}>
                      {Math.round(avgLevel)}%
                    </div>
                    <div className="text-sm text-gray-300 mt-1">{category}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {categorySkills.length} skills
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
