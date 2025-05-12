import React, { useState,useRef,useEffect } from "react";
import { Dialog } from "@headlessui/react";
import CategorySlider from "./CategorySlider/CategorySlider";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Categories = {
  [category: string]: string[];
};

const categories: Categories = {
  Travel: [
    "/assets/Images/GalleryImages/Travel/DSC00098_2.jpg",
    "/assets/Images/GalleryImages/Travel/DSC00966(1).JPG",
    "/assets/Images/GalleryImages/Travel/DSC01956_3.jpg",
    "/assets/Images/GalleryImages/Travel/DSC02015_(1).JPG",
    "/assets/Images/GalleryImages/Travel/DSC02032_2.JPG",
    "/assets/Images/GalleryImages/Travel/DSC02106_2.jpg"
  ],
  Portraits: [
    "/assets/Images/GalleryImages/Portrait/IMG_0790.jpg",
    "/assets/Images/GalleryImages/Portrait/IMG_0791.jpg",
    "/assets/Images/GalleryImages/Portrait/IMG_0795.jpg",
    "/assets/Images/GalleryImages/Portrait/IMG_1059_2_(1).jpg",
    "/assets/Images/GalleryImages/Portrait/IMG_2773.jpg",
    "/assets/Images/GalleryImages/Portrait/IMG_2780.jpg"
  ],
  Festivals: [
    "/assets/Images/GalleryImages/Festival/IMG_0962.JPG",
    "/assets/Images/GalleryImages/Festival/IMG_0970.JPG",
    "/assets/Images/GalleryImages/Festival/IMG_0999.JPG",
    "/assets/Images/GalleryImages/Festival/DSC00656.JPG",
    "/assets/Images/GalleryImages/Festival/DSC01268.jpg",
    "/assets/Images/GalleryImages/Festival/DSC01635.jpg",
    "/assets/Images/GalleryImages/Festival/DSC02727_2.JPG",
    "/assets/Images/GalleryImages/Festival/DSC02858_2.JPG",
    "/assets/Images/GalleryImages/Festival/DSC03219.JPG",
    "/assets/Images/GalleryImages/Festival/DSC03311.JPG"
  ],
  Jewelleries: [
    "/assets/Images/GalleryImages/Jewelleries/IMG_3646_(1).jpg",
    "/assets/Images/GalleryImages/Jewelleries/IMG_3647.jpg",
    "/assets/Images/GalleryImages/Jewelleries/IMG_3648.jpg",
    "/assets/Images/GalleryImages/Jewelleries/IMG_3649.jpg",
    "/assets/Images/GalleryImages/Jewelleries/IMG_3650.jpg"
  ],
  English_Origin: [
    "/assets/Images/GalleryImages/EnglishOrigin/001_(1).jpg",
    "/assets/Images/GalleryImages/EnglishOrigin/002_(1).jpg",
    "/assets/Images/GalleryImages/EnglishOrigin/002-2.jpg",
    "/assets/Images/GalleryImages/EnglishOrigin/003.jpg",
    "/assets/Images/GalleryImages/EnglishOrigin/004.jpg",
    "/assets/Images/GalleryImages/EnglishOrigin/006.jpg"
  ],
  Biotique: [
    "/assets/Images/GalleryImages/Biotique/DSC00879_(1).jpg",
    "/assets/Images/GalleryImages/Biotique/DSC00865.jpg",
    "/assets/Images/GalleryImages/Biotique/DSC00844.jpg"
  ]
};


export default function Gallery(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [overflowing, setOverflowing] = useState<{ [key: string]: boolean }>({});

  const openModal = (category: string, index: number) => {
    setActiveCategory(category);
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    const images = categories[activeCategory];
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = categories[activeCategory];
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // const scroll = (category: string, direction: "left" | "right") => {
  //   const container = scrollRefs.current[category];
  //   if (container) {
  //     const scrollAmount = direction === "left" ? -300 : 300;
  //     container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  //   }
  // };

  useEffect(() => {
    const checkOverflow = () => {
      const result: { [key: string]: boolean } = {};
      Object.entries(scrollRefs.current).forEach(([key, el]) => {
        if (el) result[key] = el.scrollWidth > el.clientWidth;
      });
      setOverflowing(result);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div className="space-y-12 p-4 mt-10 scroll-m-1" id="gallery">
     {Object.entries(categories).map(([category, images]) => (
  <CategorySlider
    key={category}
    category={category}
    images={images}
    openModal={openModal}
  />
))}


      {/* Modal */}
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
