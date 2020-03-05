import React from 'react';
import PropTypes from 'prop-types';

import AdComponent from './AdComponent';

const ReviewThisProduct = ({ handleClick }) => (
  <div className="AddReview">
    <hr className="spacingBorder" />
    <h3>Review this product</h3>
    <p>Share your thoughts with other customers</p>
    <button
      type="submit"
      className="buttonStyles"
      onClick={handleClick}
    >
      Write a customer review
    </button>
    <hr className="spacingBorder" />
    <AdComponent />
  </div>
);

ReviewThisProduct.propTypes = {
  handleClick: PropTypes.func,
};

ReviewThisProduct.defaultProps = {
  handleClick: () => { },
};

export default ReviewThisProduct;
