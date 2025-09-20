import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Head>
        <title>Clement VSC - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in modern web technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container mx-auto px-4">
        <NavBar />
      </div>
      
      <main>
        <div className="container mx-auto px-4 text-center">
          <Hero />
        </div>
        <div className="container mx-auto px-4 text-center">
          <About />
        </div>
        <div className="container mx-auto px-4 text-center">
          <Skills />
        </div>
        <div className="container mx-auto px-4 text-center">
          <Projects />
        </div>
        <div className="container mx-auto px-4 text-center">
          <Testimonials />
        </div>
        <div className="container mx-auto px-4 text-center">
          <Contact />
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Clement VSC. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
