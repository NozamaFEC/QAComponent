/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import style from './ReviewComments.module.css';

const ReviewComments = ({ texts }) => {
  const [toggle, setToggle] = useState(false);
  const [counter, add1] = useState(0);
  return (
    <div className={`${style.ReviewComments} ${style.ratingText}`}>
      <form>
        <select className={style.dropDown}>
          <option>Top Reviews</option>
          <option>Most recent</option>
        </select>
      </form>

      { texts.slice(0, toggle ? texts.length : 4).map((text) => (
        <div key={text.id} className={style.Comments}>
          <div className={style.spacingMini}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
              alt="stock_image"
            />
            <span>{text.profileName}</span>
          </div>
          <div>
            <StarRatingComponent
              className="starComponent"
              name="valueForMoney"
              value={text.rating}
              editing={false}
            />
            <i className={style.iconTextSeperator} />
            <span
              className={style.ratingText}
              style={{ fontWeight: 700, color: '#111111' }}
            >
              {text.subjectLine}
            </span>
          </div>
          <p>
            Reviewed in the
            {` ${text.location} `}
            on
            {` ${text.date}`}
          </p>
          <div>
            <span>{`${text.itemDescription}`}</span>
            <i className={style.iconTextSeperator} />
            <span style={{
              color: '#c45500', fontWeight: 700, fontSize: '11px', linHeight: 1.465,
            }}
            >
              Verified Purchase
            </span>
          </div>
          <span>
            {`${text.text}`}
          </span>
          <p>
            {`${173 + counter}`}
            {' '}
            people found this helpful
          </p>
          <div>
            <button
              type="button"
              className={style.helpful}
              onClick={() => add1(counter + 1)}
            >
              Helpful
            </button>
            <i className={style.iconTextSeperator} />
            <span>Comment</span>
            <i className={style.iconTextSeperator} />
            <span>Report abuse</span>
          </div>
        </div>
      ))}
      <p
        className={style.ratingText}
        onClick={() => setToggle(!toggle)}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
      >
        {toggle ? 'NOZAMA' : 'See all reviews on this product'}
      </p>
    </div>

  );
};

ReviewComments.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.any),
};

ReviewComments.defaultProps = {
  texts: [],
};

export default ReviewComments;
