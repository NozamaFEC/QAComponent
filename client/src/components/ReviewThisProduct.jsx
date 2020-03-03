import React from 'react';

import AdComponent from './AdComponent';

const ReviewThisProduct = () => (
  <div className="AddReview">
    <hr className="spacingBorder" />
    <h3>Review this product</h3>
    <p>Share your thoughts with other customers</p>
    <button type="submit">Write a customer review</button>
    <hr className="spacingBorder" />
    <AdComponent />
  </div>
);

export default ReviewThisProduct;
