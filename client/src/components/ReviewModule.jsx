import React from 'react';

import CustomerReviews from './CustomerReviews';
import ReviewThisProduct from './ReviewThisProduct';
import ImageCarousel from './ImageCarousel';
import ReviewComments from './ReviewComments';


class ReviewModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="ReviewModule">
        {`${value}`}
        <CustomerReviews />
        <ReviewThisProduct />
        <div className="middle-container">
          <ImageCarousel />
          <ReviewComments />
        </div>
      </div>
    );
  }
}

export default ReviewModule;
