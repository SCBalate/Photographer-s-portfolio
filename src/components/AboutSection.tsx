import React from 'react';
// import { Film, Camera, Award, Monitor } from 'lucide-react';
// import SlickCarousel from "../components/Slider/Slider"
// import { InstagramEmbed } from "react-social-media-embed";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                src="../assets/Images/DSC02015.JPG"
                alt="Cinematographer at work"
                className="w-full max-w-lg mx-auto rounded-sm shadow-xl"
              />
              {/* <SlickCarousel/> */}
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500 z-0"></div>
            
            {/* Technical specs overlay */}
            <div className="absolute bottom-6 left-6 bg-black/80 px-3 py-1 text-xs text-white font-mono z-20">
     
            </div>
            {/* <InstagramEmbed url="https://www.instagram.com/reel/C_FzIFlodX6/?igsh=Z3kzc24zdzlxN3I5" width={500} /> */}
          </div>
          
          {/* Content Column */}
          <div className="lg:w-1/2 space-y-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Story</h2>
            <div className="w-16 h-0.5 bg-amber-500"></div>
            <p className="text-gray-300 leading-relaxed">
            I’m Kuldeep Gawande a cinematographer driven by a love for storytelling and real moments. From freelancing to leading projects at HOC and working on shows like Chala Hava Yau Dya, my journey has been all about capturing emotion through the lens. Whether it’s a festival, a portrait, or a travel story, I aim to create visuals that speak and stay with you.
            </p>
            {/* <p className="text-gray-300 leading-relaxed">
              My philosophy centers on the belief that every frame should advance the story. I'm known for 
              my meticulous attention to lighting, composition, and camera movement—technical elements that, 
              when thoughtfully executed, elevate the emotional impact of every scene.
            </p> */}
            
            {/* Skills & Experience */}
            {/* <div className="grid grid-cols-2 gap-5 mt-8">
              <div className="flex items-start space-x-3">
                <Film className="text-amber-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-medium text-lg">Narrative Films</h3>
                  <p className="text-gray-400 text-sm">Feature & short format storytelling</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Camera className="text-amber-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-medium text-lg">Technical Mastery</h3>
                  <p className="text-gray-400 text-sm">Expert in multiple camera systems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="text-amber-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-medium text-lg">Award Winner</h3>
                  <p className="text-gray-400 text-sm">Recognized at international festivals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Monitor className="text-amber-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-medium text-lg">Commercial Work</h3>
                  <p className="text-gray-400 text-sm">High-end brand & advertising visuals</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;