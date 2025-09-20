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
      
      <NavBar />
      
      <main>
        <section id="home" className="mx-auto max-w-6xl px-4 text-center">
          <Hero />
        </section>
        
        <section id="about" className="mx-auto max-w-6xl px-4 text-center">
          <About />
        </section>
        
        <section id="skills" className="mx-auto max-w-6xl px-4 text-center">
          <Skills />
        </section>
        
        <section id="projects" className="mx-auto max-w-6xl px-4 text-center">
          <Projects />
        </section>
        
        <section id="testimonials" className="mx-auto max-w-6xl px-4 text-center">
          <Testimonials />
        </section>
        
        <section id="contact" className="mx-auto max-w-6xl px-4 text-center">
          <Contact />
        </section>
      </main>
    </div>
  );
}
