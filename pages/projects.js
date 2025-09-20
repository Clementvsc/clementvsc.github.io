import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Head>
          <title>Projects - Clement Vsc | Full Stack Developer & DevOps Engineer</title>
          <meta name="description" content="Explore Clement Vsc's portfolio of projects including Terraform automation, Kubernetes platforms, Python toolkits, and modern web applications." />
          <meta name="keywords" content="clement vsc projects, terraform automation, kubernetes platform, python toolkit, web development projects" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://clementvsc.github.io/projects" />
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
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
                <a href="/projects" className="text-blue-600 dark:text-blue-400 font-medium">Projects</a>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
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
          <Projects />
        </motion.main>
      </div>
    </ThemeProvider>
  );
}
