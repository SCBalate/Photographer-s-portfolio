import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://images.pexels.com/videos/3045163/free-video-3045163.mp4?fit=crop&w=1920&h=1080"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-amber-500 text-lg md:text-xl uppercase tracking-[0.2em] font-light mb-3">
          Kuldeep Gawande
        </h2>
        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
          Cinematographer
        </h1>
        <div className="w-20 h-0.5 bg-amber-500 my-5"></div>
        <p className="text-gray-200 max-w-lg mx-auto text-lg md:text-xl font-light leading-relaxed">
          Capturing stories through the lens with a unique vision and artistic sensibility
        </p>
        
        <div className="mt-10">
          <a 
            href="https://roaring-pegasus-0850e2.netlify.app"
            target="_blank"
            rel="noopener noreferrer" 
            className="px-8 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
          >
            View Portfolio
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#portfolio" className="text-white flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
      
      {/* Frame Markers */}
      <div className="absolute top-16 left-8 md:left-16 w-5 h-5 border-l-2 border-t-2 border-white/50 z-20"></div>
      <div className="absolute top-16 right-8 md:right-16 w-5 h-5 border-r-2 border-t-2 border-white/50 z-20"></div>
      <div className="absolute bottom-16 left-8 md:left-16 w-5 h-5 border-l-2 border-b-2 border-white/50 z-20"></div>
      <div className="absolute bottom-16 right-8 md:right-16 w-5 h-5 border-r-2 border-b-2 border-white/50 z-20"></div>
    </section>
  );
};

export default HeroSection;