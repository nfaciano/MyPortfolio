import React, { useState } from 'react';
import '../componentscss/carousel.css'; // Ensure this path is correct

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageWidth = 100 / 3; // Since we want to show 3 images at a time
  const totalWidth = imageWidth * images.length;

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      // If at the start, wrap around to the last set of images
      if (prevIndex === 0) {
        return images.length - 3; // Assuming there are at least 3 images
      }
      return prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      // If at the end, wrap around to the beginning
      if (prevIndex >= images.length - 3) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const toggleDescription = (index) => {
    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  // Calculate the correct offset for the translation
  const getTransform = () => {
    let offset = currentIndex * imageWidth;
    if (offset > totalWidth) {
      offset = totalWidth;
    }
    return offset;
  };

  return (
    <div className="carousel">
      <button onClick={goToPrev} className="carousel-nav left-nav">&#10094;</button>
      <div className="carousel-images" style={{ transform: `translateX(-${getTransform()}%)` }}>
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
