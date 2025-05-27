import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string; // fallback (JPG or PNG)
  alt?: string;
  className?: string;
  onClick?: () => void;
  placeholderSrc?: string; // blurred image placeholder (optional)
  sources?: { srcSet: string; type: string }[]; // e.g., avif, webp
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt = '',
  className = '',
  onClick,
  placeholderSrc,
  sources,
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {rootMargin: '100px',
         threshold: 0.01 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Optional blur placeholder or pulse if not loaded */}
      {!isLoaded && (
        placeholderSrc ? (
          <img
            src={placeholderSrc}
            alt="blurred preview"
            className="absolute inset-0 w-full h-full object-cover blur scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )
      )}

      {isInView && (
        <picture>
          {sources?.map((source, idx) => (
            <source key={idx} srcSet={source.srcSet} type={source.type} />
          ))}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </picture>
      )}
    </div>
  );
};

export default LazyImage;
