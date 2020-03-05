import React from 'react';
import PropTypes from 'prop-types';

import StarRatingComponent from 'react-star-rating-component';
import RatingsHistogram from './RatingsHistogram';
import ByFeature from './ByFeature';

const CustomerReviews = ({ customerReviewsST, byFeatureST }) => {
  const {
    numberOfStars, rate, histogram, customers,
  } = customerReviewsST;
  return (
    <div className="ReviewRating">
      <h2>Customer reviews</h2>
      <div>
        <StarRatingComponent
          name="rate1"
          value={numberOfStars}
          editing={false}
        />
        <span className="rating-letter-space" />
        <span>
          {`${rate}`}
          {' '}
          out of 5
        </span>
        <p className="rating-text">
          {`${customers} customer ratings`}
          {' '}
        </p>
        <RatingsHistogram
          histogram={histogram}
        />
        <hr className="spacingBorder" />
        <ByFeature
          byFeatureST={byFeatureST}
        />
      </div>
    </div>
  );
};

CustomerReviews.propTypes = {
  customerReviewsST: PropTypes.shape({
    numberOfStars: PropTypes.number,
    rate: PropTypes.number,
    customers: PropTypes.number,
    histogram: PropTypes.object,
  }),
  byFeatureST: PropTypes.shape({
    val1: PropTypes.number,
    val2: PropTypes.number,
    val3: PropTypes.number,
  }),
};

CustomerReviews.defaultProps = {
  customerReviewsST: {
    numberOfStars: 4,
    rate: 4,
    customers: 12,
  },
  byFeatureST: {},
};

export default CustomerReviews;
