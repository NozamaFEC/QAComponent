import React from 'react';

import CustomerReviews from './CustomerReviews';
import ReviewThisProduct from './ReviewThisProduct';

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
      </div>
    );
  }
}

export default ReviewModule;
