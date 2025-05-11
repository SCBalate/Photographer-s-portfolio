import React from 'react';
import { Video, Camera, Film, Lightbulb, Users, Palette } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Film className="w-8 h-8 text-amber-500" />,
      title: "Feature Films",
      description: "Complete cinematography services for narrative feature films, from pre-production planning to final color grading."
    },
    {
      icon: <Camera className="w-8 h-8 text-amber-500" />,
      title: "Commercial Production",
      description: "High-end visual solutions for brands and agencies seeking cinematic quality for their advertising campaigns."
    },
    {
      icon: <Video className="w-8 h-8 text-amber-500" />,
      title: "Music Videos",
      description: "Creative direction and cinematography for artists looking to elevate their visual presence through music videos."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
      title: "Visual Consultation",
      description: "Expert advice on visual storytelling, equipment selection, and technical approaches to achieve your creative vision."
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Workshop & Training",
      description: "Educational sessions for aspiring cinematographers and filmmakers on the art and craft of visual storytelling."
    },
    {
      icon: <Palette className="w-8 h-8 text-amber-500" />,
      title: "Color Grading",
      description: "Professional color grading services to enhance the visual impact and mood of your project."
    }
  ];

  return (
    <section id="services" className="bg-gray-900 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Services</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-4"></div>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Offering comprehensive cinematography services tailored to your project's unique vision and requirements
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-black p-6 border border-gray-800 hover:border-amber-500/30 transition-all duration-300 group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Workflow Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">My Workflow</h3>
          <div className="w-12 h-0.5 bg-amber-500 mx-auto mb-12"></div>
          
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-0 right-0 top-16 h-0.5 bg-gray-800 z-0"></div>
            
            {/* Process Steps */}
            {['Consultation', 'Pre-Production', 'Production', 'Post-Production', 'Delivery'].map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center mb-10 md:mb-0">
                <div className="bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold">
                  {index + 1}
                </div>
                <h4 className="text-white font-medium mt-3 mb-1">{step}</h4>
                <div className="text-center text-gray-400 text-sm max-w-[180px] hidden md:block">
                  {getStepDescription(index)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function getStepDescription(index: number): string {
  const descriptions = [
    "Understanding your vision and defining the visual approach",
    "Planning shots, selecting equipment, and preparing the team",
    "Capturing your story with technical precision and artistry",
    "Editing, color grading, and refining the visual narrative",
    "Presenting the final product in the highest quality format"
  ];
  
  return descriptions[index];
}

export default ServicesSection;