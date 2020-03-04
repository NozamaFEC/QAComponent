import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
import { texts } from './sampleText';

const ReviewComments = () => (
  <div className="ReviewComments rating-text">
    <form>
      <select className="dropDown">
        <option>Top Reviews</option>
        <option>Most recent</option>
      </select>
    </form>

    { texts.map((text) => (
      <div key={text.id} className="Comments">
        <div className="spacing-mini">
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
          <i className="icon-text-seperator" />
          <span className="rating-text" style={{ fontWeight: 700, color: '#111111' }}>{text.subjectLine}</span>
        </div>
        <p>
          Reviewed in the
          {` ${text.location} `}
          on
          {` ${text.date}`}
        </p>
        <div>
          <span>{`${text.itemDescription}`}</span>
          <i className="icon-text-seperator" />
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
        <p>173 people found this helpful</p>
        <div>
          <button type="button" className="helpful">Helpful</button>
          <i className="icon-text-seperator" />
          <span>Comment</span>
          <i className="icon-text-seperator" />
          <span>Report abuse</span>
        </div>
      </div>
    ))}
  </div>

);

export default ReviewComments;
