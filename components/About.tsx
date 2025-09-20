import React from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <section id="about" className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Summary */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating innovative solutions and bringing ideas to life through clean, 
              efficient code. With a strong foundation in both frontend and backend development, 
              I strive to deliver exceptional user experiences.
            </p>
          </div>

          {/* Timeline & Bullet Points */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Experience Timeline
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Senior Developer</h4>
                    <p className="text-blue-600 font-medium">2022 - Present</p>
                    <p className="text-gray-600 mt-1">
                      Leading development of scalable web applications and mentoring junior developers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Full Stack Developer</h4>
                    <p className="text-blue-600 font-medium">2020 - 2022</p>
                    <p className="text-gray-600 mt-1">
                      Developed and maintained multiple client projects using React, Node.js, and cloud technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                    <p className="text-blue-600 font-medium">2018 - 2020</p>
                    <p className="text-gray-600 mt-1">
                      Specialized in creating responsive, user-friendly interfaces with modern JavaScript frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Skills & Highlights */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    <strong>5+ years</strong> of experience in full-stack web development
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    <strong>Expert proficiency</strong> in React, TypeScript, Node.js, and modern web frameworks
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    <strong>Cloud architecture</strong> experience with AWS, Docker, and CI/CD pipelines
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    <strong>UI/UX focused</strong> with strong attention to responsive design and accessibility
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    <strong>Open source contributor</strong> and active member of the developer community
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    <strong>Agile methodology</strong> experience with cross-functional team collaboration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
