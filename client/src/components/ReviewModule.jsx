import React from 'react';

import CustomerReviews from './CustomerReviews';
import ReviewThisProduct from './ReviewThisProduct';
import ImageCarousel from './ImageCarousel';


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
      <div className="CustomerReviews">
        {`${value}`}
        <CustomerReviews />
        <ReviewThisProduct />
        <div className="middle-container">
          <ImageCarousel />
        </div>
      </div>
    );
  }
}

export default ReviewModule;
