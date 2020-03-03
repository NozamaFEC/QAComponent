import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
import RatingsHistogram from './RatingsHistogram';
import ByFeature from './ByFeature';

const CustomerReviews = () => (
  <div className="ReviewRating">
    <h2>Customer reviews</h2>
    <div>
      <StarRatingComponent
        name="rate1"
        value={4}
        editing={false}
      />
      <span className="rating-letter-space" />
      <span>4.1 out of 5</span>
      <p className="rating-text">1,853 customer ratings</p>
      <RatingsHistogram />
      <hr className="spacingBorder" />
      <ByFeature />
    </div>
  </div>
);

export default CustomerReviews;
