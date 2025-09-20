import React from 'react';
import Image from 'next/image';

interface HeroProps {
  avatar?: string;
  name?: string;
  headline?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  avatar = '/avatar.jpg',
  name = 'Your Name',
  headline = 'Building the Future',
  description = 'Crafting exceptional digital experiences with modern technologies and innovative solutions.',
  primaryCTA = { text: 'View My Work', href: '#projects' },
  secondaryCTA = { text: 'Get In Touch', href: '#contact' }
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-gradient-xy"></div>
      
      {/* Accent Blobs */}
      <div className="absolute top-10 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-fade-in-up">
            {headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            {description}
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
          <a
            href={primaryCTA.href}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-sm"></span>
            <span className="relative">{primaryCTA.text}</span>
          </a>
          
          <a
            href={secondaryCTA.href}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {secondaryCTA.text}
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* Custom CSS Classes (add to your global CSS or Tailwind config) */
/*
@keyframes gradient-xy {
  0%, 100% {
    background-size: 400% 400%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes tilt {
  0%, 50%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(-1deg);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-gradient-xy {
  animation: gradient-xy 15s ease infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-tilt {
  animation: tilt 10s infinite linear;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
*/
