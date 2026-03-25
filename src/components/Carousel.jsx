import { useState } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="carousel-placeholder"></div>;
  }

  const goTo = (index) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  const showControls = images.length > 1;

  return (
    <div className="carousel" data-carousel>
      <div className="carousel-track" data-track style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} loading="lazy" />
        ))}
      </div>

      {showControls && (
        <>
          <button
            className="carousel-btn prev"
            type="button"
            aria-label="Vorige afbeelding"
            data-prev
            onClick={() => goTo(currentIndex - 1)}
          >
            ‹
          </button>
          <button
            className="carousel-btn next"
            type="button"
            aria-label="Volgende afbeelding"
            data-next
            onClick={() => goTo(currentIndex + 1)}
          >
            ›
          </button>
          <div className="carousel-dots" role="tablist" aria-label="Carousel navigatie" data-dots>
            {images.map((_, i) => (
              <button
                key={i}
                className="carousel-dot"
                type="button"
                aria-label={`Ga naar afbeelding ${i + 1}`}
                aria-selected={i === currentIndex}
                onClick={() => goTo(i)}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
