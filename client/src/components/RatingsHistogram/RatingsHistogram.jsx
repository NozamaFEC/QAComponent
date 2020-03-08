import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './RatingsHistogram.module.css';

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
            <span className={styles.ratingText}>5 star</span>
            <span className={styles.ratingLetterSpace} />
          </td>
          <td>
            <div className={styles.ratingBarContainer}>
              <Div width={star5} />
            </div>
          </td>
          <td>
            <span className={styles.ratingLetterSpace} />
            <span className={styles.ratingText}>{star5}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className={styles.ratingText}>4 star</span>
            <span className={styles.ratingLetterSpace} />
          </td>
          <td>
            <div className={styles.ratingBarContainer}>
              <Div width={star4} />
            </div>
          </td>
          <td>
            <span className={styles.ratingLetterSpace} />
            <span className={styles.ratingText}>{star4}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className={styles.ratingText}>3 star</span>
            <span className={styles.ratingLetterSpace} />
          </td>
          <td>
            <div className={styles.ratingBarContainer}>
              <Div width={star3} />
            </div>
          </td>
          <td>
            <span className={styles.ratingLetterSpace} />
            <span className={styles.ratingText}>{star3}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className={styles.ratingText}>2 star</span>
            <span className={styles.ratingLetterSpace} />
          </td>
          <td>
            <div className={styles.ratingBarContainer}>
              <Div width={star2} />
            </div>
          </td>
          <td>
            <span className={styles.ratingLetterSpace} />
            <span className={styles.ratingText}>{star2}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className={styles.ratingText}>1 star</span>
            <span className={styles.ratingLetterSpace} />
          </td>
          <td>
            <div className={styles.ratingBarContainer}>
              <Div width={star1} />
            </div>
          </td>
          <td>
            <span className={styles.ratingLetterSpace} />
            <span className={styles.ratingText}>{star1}</span>
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
