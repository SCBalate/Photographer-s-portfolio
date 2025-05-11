import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Chen",
    role: "Film Director",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Alex's eye for composition and lighting transformed our indie film into a visual masterpiece. His ability to tell a story through the camera is unmatched.",
    project: "Ethereal - Short Film"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Working with Alex was the best decision for our campaign. His cinematic approach elevated our brand and delivered exactly the premium feel we wanted.",
    project: "Luxury Watch Campaign"
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "Music Artist",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Alex didn't just shoot my music video; he created a visual experience that perfectly complemented the emotion of the song. Pure creative genius.",
    project: "Resonance - Music Video"
  }
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Client Testimonials</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-16"></div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-10 left-0 opacity-20">
            <Quote size={60} className="text-amber-500" />
          </div>
          
          {/* Testimonial Carousel */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto border-4 border-gray-800"
                      />
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                      <p className="text-gray-300 text-lg md:text-xl italic mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <h3 className="text-white font-semibold text-xl">{testimonial.name}</h3>
                      <p className="text-amber-500">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm mt-1">{testimonial.project}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 hover:bg-amber-500 p-2 rounded-full text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 hover:bg-amber-500 p-2 rounded-full text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-amber-500 w-6' : 'bg-gray-600'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;