import React from 'react';
import PropTypes from 'prop-types';

import StarRatingComponent from 'react-star-rating-component';
import styles from './ByFeature.module.css';


const ByFeature = ({ byFeatureST }) => {
  const { val1, val2, val3 } = byFeatureST;
  return (
    <div className={styles.Byfeature}>
      <p>By feature</p>
      <div className={styles.featureFlex}>
        <span className={styles.ratingText}>Value for money</span>
        <StarRatingComponent
          className={styles.starComponent}
          name="valueForMoney"
          value={val1}
          editing={false}
        />
        <span className={`${styles.ratingText}  ${styles.textComponent}`}>{`${val1}.0`}</span>
      </div>
      <div className={styles.featureFlex}>
        <span className={styles.ratingText}> Durability </span>
        <StarRatingComponent
          className={styles.starComponent}
          name="durability"
          value={val2}
          editing={false}
        />
        <span className={` ${styles.ratingText} ${styles.textComponent}`}>{`${val2}.0`}</span>
      </div>
      <div className={styles.featureFlex}>

        <span className={styles.ratingText}> Material quality </span>
        <StarRatingComponent
          className={styles.starComponent}
          name="materialQuality"
          value={val3}
          editing={false}
        />
        <span className={` ${styles.ratingText} ${styles.textComponent} `}>{`${val3}.0`}</span>
      </div>
    </div>
  );
};

ByFeature.propTypes = {
  byFeatureST: PropTypes.shape({
    val1: PropTypes.number,
    val2: PropTypes.number,
    val3: PropTypes.number,
  }),
};

ByFeature.defaultProps = {
  byFeatureST: {
    val1: 5,
    val2: 5,
    val3: 5,
  },
};

export default ByFeature;
