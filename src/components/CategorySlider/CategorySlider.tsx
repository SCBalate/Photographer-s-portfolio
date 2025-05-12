// components/CategorySlider.tsx
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LazyImage from "../LazyImage/LazyImage";

interface Props {
  category: string;
  images: string[];
  openModal: (category: string, index: number) => void;
}

const CategorySlider: React.FC<Props> = ({ category, images, openModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // configure perView and spacing; adjust perView = 5 as needed
  const perView = 5;
  const spacing = 16;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView,
      spacing,
    },
    breakpoints: {
      "(max-width: 1280px)": { slides: { perView: 4, spacing } },
      "(max-width: 1024px)": { slides: { perView: 3, spacing } },
      "(max-width: 640px)": { slides: { perView: 2, spacing } },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);
    },
  });

  // only show chevrons if there's overflow
  const canPrev = loaded && currentSlide > 0;
  const canNext =
    loaded &&
    currentSlide <
      (instanceRef.current?.track.details.slides.length || 0) -
        perView;

  return (
    <div className="relative group">
      <h2 className="text-2xl font-semibold mb-4">{category}</h2>

      {/* Left Chevron */}
      {loaded && canPrev && (
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hidden group-hover:flex"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Slider */}
      <div
        ref={sliderRef}
        className="keen-slider px-8 scrollbar-hide"
        style={{ overflow: "hidden" }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex-shrink-0 w-[16rem] cursor-pointer"
            onClick={() => openModal(category, idx)}
          >
            <LazyImage
              src={img}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Right Chevron */}
      {loaded && canNext && (
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hidden group-hover:flex"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default CategorySlider;
