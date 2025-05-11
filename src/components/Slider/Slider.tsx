import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define your image array
const images: string[] = [
  "../src/assets/Images/001.jpg",
  "../src/assets/Images/002.jpg",
  "../src/assets/Images/DSC00879.jpg",
];

export default function SlickCarousel(): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="max-w-xl mx-auto">
      <Slider {...settings}>
        {images.map((src: string, idx: number) => (
          <div key={idx}>
            <img
              src={src}
              alt={`Slide ${idx}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
