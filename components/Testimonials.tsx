import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with this team has been an absolute game-changer for our business. Their expertise and attention to detail is unmatched.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "The quality of work and professionalism exceeded our expectations. Highly recommend for any serious project.",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "Incredible results delivered on time and within budget. Their communication throughout the process was excellent.",
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "StartupXYZ",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "A truly professional experience from start to finish. The team's expertise shines through in every detail.",
    name: "David Kim",
    role: "Founder",
    company: "Digital Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Slider View */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                      <div className="mb-8">
                        <svg 
                          className="mx-auto h-12 w-12 text-gray-300" 
                          fill="currentColor" 
                          viewBox="0 0 32 32"
                        >
                          <path d="M10 8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4l4 4V10a2 2 0 0 0-2-2H10zm0-2h6a4 4 0 0 1 4 4v10l-6-6H10a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" />
                        </svg>
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-8">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center">
                        <img
                          className="h-16 w-16 rounded-full object-cover mr-4"
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Next testimonial"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Card Grid View (Mobile Alternative) */}
        <div className="md:hidden mt-16">
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <div key={`card-${testimonial.id}`} className="bg-white rounded-xl shadow-md p-6">
                <blockquote className="text-gray-900 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover mr-3"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
