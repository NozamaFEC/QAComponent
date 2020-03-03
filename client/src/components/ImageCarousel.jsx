import React from 'react';
import { images } from './images';

const ImageCarousel = () => (
  <div className="ImageCarousel">
    <h3>Customer images</h3>
    <div className="image-container">
      {images.map((image) => (
        <img
          src={`${image.src}`}
          alt={`${image.alt}`}
          key={image.key}
        />
      ))}
    </div>
    <p className="rating-text">See all customer images</p>
  </div>
);

export default ImageCarousel;
