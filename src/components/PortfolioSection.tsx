import React, { useState } from 'react';
import { Play } from 'lucide-react';
import MyVideoPlayer from './VideoPlayer/MyVideoPlayer';
import {extractYouTubeId} from"../Utils/Utils"
import { InstagramEmbed } from 'react-social-media-embed';
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Secrets Revealed",
    category: "Podcast",
    image: "https://img.youtube.com/vi/JHtmi6-PP8k/hqdefault.jpg",
    description: "Secrets Revealed: My Lessons From Ashneer",
    videoUrl: "https://youtu.be/JHtmi6-PP8k?si=IBxiL-MoOkNHB5FB"
  },
  {
    id: 11,
    title: "How to build a Million Doller Buisness",
    category: "Podcast",
    image: "https://img.youtube.com/vi/NOMJmVoA7JM/hqdefault.jpg",
    description: "How to build a Million doller Buisness?",
    videoUrl: "https://youtu.be/NOMJmVoA7JM?si=B-cX6US4RLnwpMop"
  },
  {
    id: 111,
    title: "Self Love Mastery",
    category: "Podcast",
    image: "https://img.youtube.com/vi/0I6zyLPpFf8/hqdefault.jpg",
    description: "How to validate yourself | find your inner GPS | Self Love Mastery",
    videoUrl: "https://youtu.be/0I6zyLPpFf8?si=ygacjsexWF_2baI6"
  },
  {
    id: 1111,
    title: "Her Supernatural experience on the road !",
    category: "Podcast",
    image: "https://img.youtube.com/vi/6C58sPUO7Bg/hqdefault.jpg",
    description: "She died and comback😱 | Take your faith to the next level",
    videoUrl: "https://youtu.be/6C58sPUO7Bg?si=N7Ml2iYrVq0Gq-GD"
  },

  {
    id: 2,
    title: "L&T Instructional video",
    category: "Instructional Video",
    image: "https://img.youtube.com/vi/BxNi5BxCHAs/hqdefault.jpg",
    description: "L&T Instructional video",
    videoUrl:"https://youtu.be/BxNi5BxCHAs?si=cNAg8du36p5Y5vb9 "
  },
  {
    id: 3,
    title: "Mahadev",
    category: "Music Video",
    image: "https://img.youtube.com/vi/jfavsLAkazw/hqdefault.jpg",
    description: "An atmospheric music video exploring themes of transcendence",
    videoUrl:"https://youtu.be/jfavsLAkazw?si=zP0zxVW-1F6BdWqF "
  },
  {
    id: 4,
    title: "VM Jewelleries",
    category: "Reels for Brands",
    image: "https://img.youtube.com/vi/Xv-i8TGP21Y/hqdefault.jpg",
    description: "A luxury watch commercial with cinematic lighting techniques",
    videoUrl:"https://www.instagram.com/reel/DH_A78Ft7p2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="

  },

  {
    id: 6,
    title: "dunamiss cosmetics",
    category: "Reels for Brands",
    image: "../../src/assets/Images/Brand3.jpg",
    description: "A automotive commercial with dynamic compositions and lighting",
    videoUrl:"https://www.instagram.com/reel/DBwDaDZBuxF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },

  {
    id: 7,
    title: "freez_frame_studio04 & silvercloudphotos_and_films",
    category: "Interior Architecture Shoots",
    image: "../../src/assets/Images/InterirorShoot.jpg",
    description: "A automotive commercial with dynamic compositions and lighting",
    videoUrl:"https://www.instagram.com/reel/C_FzIFlodX6/?igsh=Z3kzc24zdzlxN3I5"
   
  },
{    id: 77,
  title: "Atulyh_official & suyoglushtefilms",
  category: "Interior Architecture Shoots",
  image: "../../src/assets/Images/Atulyh.jpg",
  description: "A automotive commercial with dynamic compositions and lighting",
  videoUrl:" https://www.instagram.com/reel/C26cAmAtCYj/?igsh=eXBkb3A1bzk3djVr"
},
{    id: 8,
  title: "simplique",
  category: "Digital Champagne Ads",
  image: "../../src/assets/Images/simplique.avif",
  description: "A automotive commercial with dynamic compositions and lighting",
  videoUrl:"https://www.youtube.com/shorts/6ai2ItdaVG4"
 
},
{    id: 88,
  title: "Tresna Collection",
  category: "Digital Champagne Ads",
  image: "../../src/assets/Images/Tresna Collection.avif",
  description: "A automotive commercial with dynamic compositions and lighting",
  videoUrl:"https://www.youtube.com/shorts/OHQ3ciLK3bY"
 
},
{    id: 888,
  title: "EIP Mumabai Event",
  category: "Digital Champagne Ads",
  image: "../../src/assets/Images/EIP Mumbai Event.avif",
  description: "A automotive commercial with dynamic compositions and lighting",
  videoUrl:"https://www.youtube.com/shorts/eHOv_HYhy4w"
 
},
{    id: 8888,
  title: "Dunamiss",
  category: "Digital Champagne Ads",
  image: "../../src/assets/Images/Dunamissad.avif",
  description: "A automotive commercial with dynamic compositions and lighting",
  videoUrl:"https://www.youtube.com/shorts/ByPR9YjuGzc"
 
},
{    id: 88888,
  title: "Disney Creative",
  category: "Digital Champagne Ads",
  image: "../../src/assets/Images/disney creative.avif",
  description: "A automotive commercial with dynamic compositions and lighting",
  videoUrl:"https://www.youtube.com/shorts/plgq8xwBIRA"
 
},
{    id: 888888,
  title: "Alaya F",
  category: "Digital Champagne Ads",
  image: "../../src/assets/Images/Alayaf.avif",
  description: "A automotive commercial with dynamic compositions and lighting",
  videoUrl:"https://www.youtube.com/shorts/b6Dbf1fRt-k"
 
},
{    id: 8888888,
  title: "Reel For VM Jewelleries",
  category: "Digital Champagne Ads",
  image: "../../src/assets/Images/vmreel.avif",
  description: "A automotive commercial with dynamic compositions and lighting",
  videoUrl:"https://www.youtube.com/shorts/rWUGru9YpZ0"
 
},
{    id: 88888888,
  title: "Advertise For VM Jewelleries",
  category: "Digital Champagne Ads",
  image: "https://img.youtube.com/vi/Xv-i8TGP21Y/hqdefault.jpg",
  description: "A automotive commercial with dynamic compositions and lighting",
  videoUrl:"https://www.youtube.com/shorts/Xv-i8TGP21Y"
 
},

];


const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

    

  return (
    <section id="portfolio" className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Portfolio</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-10"></div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category,index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                filter === category
                  ? 'bg-amber-500 text-black'
                  : 'bg-gray-900 text-gray-400 hover:text-white'
              }`}
              onClick={() => {setFilter(category)
                console.log( category)}
              }
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            
            <div 
              key={project.id} 
              className="group relative overflow-hidden cursor-pointer transition duration-500 transform hover:scale-[1.02]"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <h3 className="text-xl text-white font-semibold mb-1">{project.title}</h3>
                <p className="text-amber-500 text-sm uppercase tracking-wider mb-3">{project.category}</p>
                
                {/* Play Button (only show for projects with video) */}
                {project.videoUrl && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-amber-500 rounded-full p-3">
                      <Play size={24} className="text-black" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button 
              className="absolute top-4 right-4 text-white z-50"
              onClick={() => setSelectedProject(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {selectedProject.videoUrl ? (
              // <video controls className="w-full aspect-video">
              //   <source src={selectedProject.videoUrl} type="video/mp4" />
              //   Your browser does not support the video tag.
              // </video>
              <>
              {selectedProject.videoUrl.includes("instagram") ? (    <InstagramEmbed url={selectedProject.videoUrl} width={500} height={700} className='mx-auto'/>
             ):   <MyVideoPlayer videoId={extractYouTubeId(selectedProject.videoUrl )}/>}
           
              </>
            ) : (
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full"
              />
            )}
            
            <div className="p-6">
           
              <h3 className="text-2xl text-white font-bold mb-2">{selectedProject.title}</h3>
              
              <p className="text-amber-500 text-sm uppercase tracking-wider mb-4">{selectedProject.category}</p>
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;