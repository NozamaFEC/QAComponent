import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    display: block;
    margin-left: 0;
    width: ${(props) => props.width};
    height: 100%;
    background-color: #ffce00;
    transition: width 30s ease;
    background: linear-gradient(to bottom, #ffce00, #ffa700);
  `;
const RatingsHistogram = ({ histogram }) => {
  const {
    star5, star4, star3, star2, star1,
  } = histogram;

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <span className="rating-text">5 star</span>
            <span className="rating-letter-space" />
          </td>
          <td>
            <div className="rating-bar-container">
              <Div width={star5} />
            </div>
          </td>
          <td>
            <span className="rating-letter-space" />
            <span className="rating-text">{star5}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="rating-text">4 star</span>
            <span className="rating-letter-space" />
          </td>
          <td>
            <div className="rating-bar-container">
              <Div width={star4} />
            </div>
          </td>
          <td>
            <span className="rating-letter-space" />
            <span className="rating-text">{star4}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="rating-text">3 star</span>
            <span className="rating-letter-space" />
          </td>
          <td>
            <div className="rating-bar-container">
              <Div width={star3} />
            </div>
          </td>
          <td>
            <span className="rating-letter-space" />
            <span className="rating-text">{star3}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="rating-text">2 star</span>
            <span className="rating-letter-space" />
          </td>
          <td>
            <div className="rating-bar-container">
              <Div width={star2} />
            </div>
          </td>
          <td>
            <span className="rating-letter-space" />
            <span className="rating-text">{star2}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="rating-text">1 star</span>
            <span className="rating-letter-space" />
          </td>
          <td>
            <div className="rating-bar-container">
              <Div width={star1} />
            </div>
          </td>
          <td>
            <span className="rating-letter-space" />
            <span className="rating-text">{star1}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

RatingsHistogram.propTypes = {
  histogram: PropTypes.shape({
    star5: PropTypes.string,
    star4: PropTypes.string,
    star3: PropTypes.string,
    star2: PropTypes.string,
    star1: PropTypes.string,
  }),
};

RatingsHistogram.defaultProps = {
  histogram: {
    star5: '40%',
    star4: '40%',
    star3: '10%',
    star2: '10%',
    star1: '29%',
  },
};

export default RatingsHistogram;
