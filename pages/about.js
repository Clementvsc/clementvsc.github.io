import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import About from '../components/About';

export default function AboutPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Head>
          <title>About - Clement Vsc | Full Stack Developer & DevOps Engineer</title>
          <meta name="description" content="Learn about Clement Vsc's background, experience, and expertise in full stack development, DevOps engineering, and cloud solutions architecture." />
          <meta name="keywords" content="about clement vsc, full stack developer experience, devops engineer background, cloud solutions architect" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="About - Clement Vsc | Full Stack Developer & DevOps Engineer" />
          <meta property="og:description" content="Discover Clement Vsc's professional journey, technical expertise, and passion for modern web technologies and automation." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://clementvsc.github.io/about" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://clementvsc.github.io/about" />
        </Head>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.a
                href="/"
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clement Vsc
              </motion.a>
              
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Home
                </a>
                <a href="/about" className="text-blue-600 dark:text-blue-400 font-medium">
                  About
                </a>
                <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Projects
                </a>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-16"
        >
          <About />
        </motion.main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
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
