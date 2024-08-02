import React, { useState } from 'react';
import '../componentscss/carousel.css'; // Ensure this path is correct

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imagesToShow = 3; // Number of images to show at once
  const imageWidth = 100 / imagesToShow;

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, images.length - imagesToShow) : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - imagesToShow ? 0 : prevIndex + 1));
  };

  const toggleDescription = (index) => {
    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  const getTransform = () => `translateX(-${currentIndex * imageWidth}%)`;

  return (
    <div className="carousel">
      <button onClick={goToPrev} className="carousel-nav left-nav">&#10094;</button>
      <div className="carousel-images" style={{ transform: getTransform() }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${index === selectedImageIndex ? 'selected' : ''}`}
            onClick={() => toggleDescription(index)}
          >
            {index === selectedImageIndex ? (
              <div className="carousel-description">
                <p>{image.caption}</p>
              </div>
            ) : (
              <img src={image.src} alt={image.alt} />
            )}
          </div>
        ))}
      </div>
      <button onClick={goToNext} className="carousel-nav right-nav">&#10095;</button>
    </div>
  );
};

export default Carousel;
