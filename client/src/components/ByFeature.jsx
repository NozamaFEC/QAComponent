import React from 'react';
import PropTypes from 'prop-types';

import StarRatingComponent from 'react-star-rating-component';


const ByFeature = ({ byFeatureST }) => {
  const { val1, val2, val3 } = byFeatureST;
  return (
    <div className="Byfeature">
      <p>By feature</p>
      <div className="featureFlex">
        <span className="rating-text">Value for money</span>
        <StarRatingComponent
          className="starComponent"
          name="valueForMoney"
          value={val1}
          editing={false}
        />
        <span className="rating-text  textComponent">{`${val1}.0`}</span>
      </div>
      <div className="featureFlex">
        <span className="rating-text"> Durability </span>
        <StarRatingComponent
          className="starComponent"
          name="durability"
          value={val2}
          editing={false}
        />
        <span className="rating-text textComponent">{`${val2}.0`}</span>
      </div>
      <div className="featureFlex">

        <span className="rating-text"> Material quality </span>
        <StarRatingComponent
          className="starComponent"
          name="materialQuality"
          value={val3}
          editing={false}
        />
        <span className="rating-text textComponent">{`${val3}.0`}</span>
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
