/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ImageCarousel.module.css';


const ImageCarousel = ({ customerImagesST }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.ImageCarousel}>
      <h3>Customer images</h3>
      <div className={styles.imageContainer}>
        {customerImagesST.slice(0, toggle ? 12 : 4).map((image) => (
          <img
            src={`${image.src}`}
            alt={`${image.alt}`}
            key={image.key}
          />
        ))}
      </div>
      <p
        className={styles.ratingText}
        onClick={() => setToggle(!toggle)}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
      >
        {toggle ? 'Great images, right?' : 'See all customer images' }
      </p>
    </div>
  );
};

ImageCarousel.propTypes = {
  customerImagesST: PropTypes.arrayOf(PropTypes.shape),
};

ImageCarousel.defaultProps = {
  customerImagesST: [],
};

export default ImageCarousel;
