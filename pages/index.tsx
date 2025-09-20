import React, { useState, useEffect } from 'react';
import Head from 'next/head';

type Theme = 'light' | 'dark' | 'system';

const Home = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const getResolvedTheme = () => {
      if (theme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return theme;
    };

    const updateResolvedTheme = () => {
      setResolvedTheme(getResolvedTheme());
    };

    updateResolvedTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', updateResolvedTheme);
      return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
    }
  }, [theme]);

  const isDark = resolvedTheme === 'dark';

  const getThemeClasses = () => {
    return {
      background: isDark ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100',
      nav: isDark ? 'bg-gray-900/80 border-gray-700/20' : 'bg-white/80 border-gray-200/20',
      text: isDark ? 'text-white' : 'text-gray-900',
      textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
      accent: isDark ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600',
      card: isDark ? 'bg-gray-800/50 border-gray-700/20' : 'bg-white/70 border-gray-200/20',
      button: isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
      section: isDark ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10' : 'bg-gradient-to-r from-blue-600/5 to-purple-600/5'
    };
  };

  const themeClasses = getThemeClasses();

  return (
    <>
      <Head>
        <title>Clement VSC - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in modern web technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={`min-h-screen ${themeClasses.background} transition-all duration-500`}>
        {/* Sticky Navigation with Floating Theme Switch */}
        <nav className={`sticky top-0 z-50 ${themeClasses.nav} backdrop-blur-md border-b transition-all duration-500`}>
          <div className="flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4 py-16">
            <div className="flex justify-between items-center w-full">
              <h1 className={`text-xl font-bold bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}>
                Clement VSC
              </h1>
              
              {/* Theme Switcher */}
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    theme === 'light' ? 'bg-white/20 scale-110' : 'hover:bg-white/10'
                  }`}
                  title="Light theme"
                >
                  ☀️
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    theme === 'dark' ? 'bg-white/20 scale-110' : 'hover:bg-white/10'
                  }`}
                  title="Dark theme"
                >
                  🌙
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    theme === 'system' ? 'bg-white/20 scale-110' : 'hover:bg-white/10'
                  }`}
                  title="System theme"
                >
                  🖥️
                </button>
              </div>
            </div>
            
            <div className="flex space-x-6 mt-4">
              <a href="#hero" className={`${themeClasses.textSecondary} hover:bg-gradient-to-r hover:${themeClasses.accent} hover:bg-clip-text hover:text-transparent transition-all duration-200`}>
                Home
              </a>
              <a href="#about" className={`${themeClasses.textSecondary} hover:bg-gradient-to-r hover:${themeClasses.accent} hover:bg-clip-text hover:text-transparent transition-all duration-200`}>
                About
              </a>
              <a href="#skills" className={`${themeClasses.textSecondary} hover:bg-gradient-to-r hover:${themeClasses.accent} hover:bg-clip-text hover:text-transparent transition-all duration-200`}>
                Skills
              </a>
              <a href="#projects" className={`${themeClasses.textSecondary} hover:bg-gradient-to-r hover:${themeClasses.accent} hover:bg-clip-text hover:text-transparent transition-all duration-200`}>
                Projects
              </a>
              <a href="#contact" className={`${themeClasses.textSecondary} hover:bg-gradient-to-r hover:${themeClasses.accent} hover:bg-clip-text hover:text-transparent transition-all duration-200`}>
                Contact
              </a>
            </div>
          </div>
        </nav>

        <main className="font-inter">
          {/* Hero Section */}
          <section id="hero" className={`${themeClasses.section} transition-all duration-500`}>
            <div className="flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4 py-16">
              <h2 className={`text-5xl md:text-6xl font-bold ${themeClasses.text} mb-6 transition-colors duration-500`}>
                Hi, I'm{' '}
                <span className={`bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}>
                  Clement
                </span>
              </h2>
              <p className={`text-xl ${themeClasses.textSecondary} mb-8 transition-colors duration-500`}>
                Full Stack Developer crafting modern web experiences
              </p>
              <button className={`${themeClasses.button} text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                Let's Connect
              </button>
            </div>
          </section>

          {/* About Section */}
          <section id="about">
            <div className="flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4 py-16">
              <h3 className={`text-3xl font-bold ${themeClasses.text} mb-8 transition-colors duration-500`}>
                About Me
              </h3>
              <div className={`${themeClasses.card} backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500`}>
                <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed transition-colors duration-500`}>
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating intuitive user experiences and robust backend solutions that make a difference.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className={`${themeClasses.section} transition-all duration-500`}>
            <div className="flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4 py-16">
              <h3 className={`text-3xl font-bold ${themeClasses.text} mb-8 transition-colors duration-500`}>
                Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((skill) => (
                  <div key={skill} className={`${themeClasses.card} backdrop-blur-sm border rounded-lg p-4 transition-all duration-500 hover:scale-105`}>
                    <span className={`font-semibold ${themeClasses.text} transition-colors duration-500`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <div className="flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4 py-16">
              <h3 className={`text-3xl font-bold ${themeClasses.text} mb-8 transition-colors duration-500`}>
                Featured Projects
              </h3>
              <div className="space-y-6 w-full">
                {[1, 2, 3].map((project) => (
                  <div key={project} className={`${themeClasses.card} backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:scale-102`}>
                    <h4 className={`text-xl font-semibold ${themeClasses.text} mb-2 transition-colors duration-500`}>
                      Project {project}
                    </h4>
                    <p className={`${themeClasses.textSecondary} mb-4 transition-colors duration-500`}>
                      A modern web application built with cutting-edge technologies.
                    </p>
                    <button className={`${themeClasses.button} text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}>
                      View Project
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className={`${themeClasses.section} transition-all duration-500`}>
            <div className="flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4 py-16">
              <h3 className={`text-3xl font-bold ${themeClasses.text} mb-8 transition-colors duration-500`}>
                Get In Touch
              </h3>
              <p className={`text-lg ${themeClasses.textSecondary} mb-8 transition-colors duration-500`}>
                Ready to collaborate? Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`${themeClasses.button} text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                  Send Message
                </button>
                <button className={`border-2 border-current ${themeClasses.text} px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:${themeClasses.button} hover:text-white hover:border-transparent`}>
                  Download CV
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={`border-t ${isDark ? 'border-gray-700/20' : 'border-gray-200/20'} transition-all duration-500`}>
          <div className="flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4 py-16">
            <p className={`${themeClasses.textSecondary} transition-colors duration-500`}>
              © 2024 Clement VSC. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
