import React from 'react';
import PropTypes from 'prop-types';
import style from './ReviewThisProduct.module.css';

import AdComponent from '../AdComponent/AdComponent';

const ReviewThisProduct = ({ handleClick }) => (
  <div className={style.AddReview}>
    <hr className={style.spacingBorder} />
    <h3>Review this product</h3>
    <p>Share your thoughts with other customers</p>
    <button
      type="submit"
      className={style.buttonStyles}
      onClick={handleClick}
    >
      Write a customer review
    </button>
    <hr className={style.spacingBorder} />
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
