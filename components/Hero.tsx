import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 dark:from-slate-900 dark:to-indigo-900 transition-all">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      {/* Avatar */}
      <div className="mx-auto mb-6 rounded-full bg-white/80 dark:bg-black/30 backdrop-blur w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center text-5xl font-bold shadow-xl border-4 border-blue-400">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="Clement Avatar" 
          className="rounded-full w-full h-full object-cover"
          onError={(e:any)=>{e.target.onerror=null;e.target.parentNode.textContent='CV'}}
        />
      </div>
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
        Clement Vsc
      </h1>
      <p className="mt-3 text-lg font-medium text-white/90">DevOps Engineer &amp; Cloud Solutions Architect</p>
      <p className="mt-5 text-white/70 max-w-xl mx-auto">I build scalable cloud platforms and automation pipelines for tomorrow’s tech.</p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="#projects"
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold transition hover:scale-105 shadow-lg">
          🚀 View My Projects
        </a>
        <a href="#contact"
          className="px-8 py-3 rounded-xl bg-white/80 dark:bg-gray-900/60 border-2 border-blue-500 text-blue-700 font-bold transition hover:bg-blue-50 dark:hover:bg-blue-800/40 hover:scale-105 shadow">
          💬 Let’s Talk
        </a>
      </div>
    </motion.div>
    {/* Blobs/Accents */}
    <div className="absolute blur-2xl opacity-40 w-[50vw] h-[50vw] bg-purple-400 rounded-full top-[-12rem] right-[-18rem]"></div>
    <div className="absolute blur-3xl opacity-30 w-[35vw] h-[35vw] bg-blue-500 rounded-full bottom-[-10rem] left-[-16rem]"></div>
  </section>
);

export default Hero;
