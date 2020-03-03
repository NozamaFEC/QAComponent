import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

const ByFeature = () => (
  <div className="Byfeature">
    <p>By feature</p>
    <div className="featureFlex">
      <span className="rating-text">Value for money</span>
      <StarRatingComponent
        className="starComponent"
        name="valueForMoney"
        value={5}
        editing={false}
      />
      <span className="rating-text  textComponent">5.0</span>
    </div>
    <div className="featureFlex">
      <span className="rating-text"> Durability </span>
      <StarRatingComponent
        className="starComponent"
        name="durability"
        value={4.5}
        editing={false}
      />
      <span className="rating-text textComponent">4.2</span>
    </div>
    <div className="featureFlex">

      <span className="rating-text"> Material quality </span>
      <StarRatingComponent
        className="starComponent"
        name="materialQuality"
        value={4.7}
        editing={false}
      />
      <span className="rating-text textComponent">4.7</span>
    </div>
  </div>


);

export default ByFeature;
