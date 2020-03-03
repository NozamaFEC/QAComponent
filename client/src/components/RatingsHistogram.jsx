import React from 'react';

const RatingsHistogram = () => (
  <table>
    <tbody>
      <tr>
        <td>
          <span className="rating-text">5 star</span>
          <span className="rating-letter-space" />
        </td>
        <td>
          <div className="rating-bar-container">
            <div className="bar-5" />
          </div>
        </td>
        <td>
          <span className="rating-letter-space" />
          <span className="rating-text">60%</span>
        </td>
      </tr>
      <tr>
        <td>
          <span className="rating-text">4 star</span>
          <span className="rating-letter-space" />
        </td>
        <td>
          <div className="rating-bar-container">
            <div className="bar-4" />
          </div>
        </td>
        <td>
          <span className="rating-letter-space" />
          <span className="rating-text">17%</span>
        </td>
      </tr>
      <tr>
        <td>
          <span className="rating-text">3 star</span>
          <span className="rating-letter-space" />
        </td>
        <td>
          <div className="rating-bar-container">
            <div className="bar-3" />
          </div>
        </td>
        <td>
          <span className="rating-letter-space" />
          <span className="rating-text">11%</span>
        </td>
      </tr>
      <tr>
        <td>
          <span className="rating-text">2 star</span>
          <span className="rating-letter-space" />
        </td>
        <td>
          <div className="rating-bar-container">
            <div className="bar-2" />
          </div>
        </td>
        <td>
          <span className="rating-letter-space" />
          <span className="rating-text">5%</span>
        </td>
      </tr>
      <tr>
        <td>
          <span className="rating-text">1 star</span>
          <span className="rating-letter-space" />
        </td>
        <td>
          <div className="rating-bar-container">
            <div className="bar-1" />
          </div>
        </td>
        <td>
          <span className="rating-letter-space" />
          <span className="rating-text">8%</span>
        </td>
      </tr>
    </tbody>
  </table>
);

export default RatingsHistogram;
