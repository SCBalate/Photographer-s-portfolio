import React, { useState,useRef } from "react";
import { Dialog } from "@headlessui/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import LazyImage from "./LazyImage/LazyImage";
type Categories = {
  [category: string]: string[];
};

const categories: Categories = {
  Travel: ["../../src/assets/Images/GalleryImages/Travel/DSC00098 2.jpg", "../../src/assets/Images/GalleryImages/Travel/DSC00966 (1).jpg", "../../src/assets/Images/GalleryImages/Travel/DSC01956 3.jpg","../../src/assets/Images/GalleryImages/Travel/DSC02015 (1).jpg","../../src/assets/Images/GalleryImages/Travel/DSC02032 2.jpg","../../src/assets/Images/GalleryImages/Travel/DSC02106 2.jpg"],
  Portraits: ["../../src/assets/Images/GalleryImages/Portrait/IMG_0790.jpg","../../src/assets/Images/GalleryImages/Portrait/IMG_0791.jpg","../../src/assets/Images/GalleryImages/Portrait/IMG_0795.jpg","../../src/assets/Images/GalleryImages/Portrait/IMG_1059 2 (1).jpg","../../src/assets/Images/GalleryImages/Portrait/IMG_2773.jpg","../../src/assets/Images/GalleryImages/Portrait/IMG_2780.jpg"],
  Festivals: ["../../src/assets/Images/GalleryImages/Festival/IMG_0962.jpg", "../../src/assets/Images/GalleryImages/Festival/IMG_0970.jpg", "../../src/assets/Images/GalleryImages/Festival/IMG_0999.jpg", "../../src/assets/Images/GalleryImages/Festival/DSC00656.jpg","../../src/assets/Images/GalleryImages/Festival/DSC01268.jpg","../../src/assets/Images/GalleryImages/Festival/DSC01635.jpg","../../src/assets/Images/GalleryImages/Festival/DSC02727 2.jpg","../../src/assets/Images/GalleryImages/Festival/DSC02858 2.jpg","../../src/assets/Images/GalleryImages/Festival/DSC03219.jpg","../../src/assets/Images/GalleryImages/Festival/DSC03311.jpg"],
  Jewelleries:["../../src/assets/Images/GalleryImages/Jewelleries/IMG_3646 (1).jpg","../../src/assets/Images/GalleryImages/Jewelleries/IMG_3647.jpg","../../src/assets/Images/GalleryImages/Jewelleries/IMG_3648.jpg","../../src/assets/Images/GalleryImages/Jewelleries/IMG_3649.jpg","../../src/assets/Images/GalleryImages/Jewelleries/IMG_3650.jpg"],
  English_Origin:["../../src/assets/Images/GalleryImages/EnglishOrigin/001 (1).jpg","../../src/assets/Images/GalleryImages/EnglishOrigin/002 (1).jpg","../../src/assets/Images/GalleryImages/EnglishOrigin/002-2.jpg","../../src/assets/Images/GalleryImages/EnglishOrigin/003.jpg","../../src/assets/Images/GalleryImages/EnglishOrigin/004.jpg","../../src/assets/Images/GalleryImages/EnglishOrigin/006.jpg"],
  Biotique:["../../src/assets/Images/GalleryImages/Biotique/DSC00879 (1).jpg","../../src/assets/Images/GalleryImages/Biotique/DSC00865.jpg","../../src/assets/Images/GalleryImages/Biotique/DSC00844.jpg"]
};

export default function Gallery(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const openModal = (category: string, index: number): void => {
    setActiveCategory(category);
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = (): void => setIsOpen(false);

  const nextImage = (): void => {
    const images = categories[activeCategory];
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (): void => {
    const images = categories[activeCategory];
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-12 p-4 mt-10 scroll-m-1" id="gallery">
    {Object.entries(categories).map(([category, images]) => {
      const scrollRef = useRef<HTMLDivElement>(null);
  
      const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
          const scrollAmount = direction === 'left' ? -300 : 300;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      };
  
      return (
        <div key={category} className="relative group">
          <h2 className="text-2xl font-semibold mb-2">{category}</h2>
  
          {/* Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hidden group-hover:flex"
          >
            <ChevronLeft size={24} />
          </button>
  
          {/* Image Strip */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 snap-x scrollbar-hide scroll-smooth px-8"
          >
            {images.map((img, i) => (
              <div key={i} onClick={() => openModal(category, i)}>
                <LazyImage
                  src={img}
                  className="w-64 h-40 object-cover rounded-lg snap-start"
                />
              </div>
            ))}
          </div>
  
          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hidden group-hover:flex"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      );
    })}
  

      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white z-10"
            >
              <X size={28} />
            </button>
            <img
              src={categories[activeCategory]?.[activeIndex]}
              alt="Enlarged view"
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="absolute inset-y-1/2 left-2">
              <button onClick={prevImage} className="text-white p-2 bg-black/50 rounded-full">
                <ChevronLeft size={28} />
              </button>
            </div>
            <div className="absolute inset-y-1/2 right-2">
              <button onClick={nextImage} className="text-white p-2 bg-black/50 rounded-full">
                <ChevronRight size={28} />
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
