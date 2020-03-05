import React from 'react';

import CustomerReviews from './CustomerReviews';
import ReviewThisProduct from './ReviewThisProduct';
import ImageCarousel from './ImageCarousel';
import ReviewComments from './ReviewComments';
import AddCommentPage from './AddCommentPage';
import { images } from './images';
import { texting } from './sampleText';

class ReviewModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerReviewsST: {
        id: 'uniqueid',
        numberOfStars: 5,
        rate: 4,
        customers: 12020,
        histogram: {
          star5: '20%',
          star4: '20%',
          star3: '10%',
          star2: '30%',
          star1: '5%',
        },

      },
      byFeatureST: {
        id: 'id',
        val1: 4,
        val2: 3,
        val3: 1,
      },
      customerImagesST: images,
      texts: texting,
      reviewThisProductST: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      reviewThisProductST: !state.reviewThisProductST,
    }));
  }

  render() {
    const {
      customerReviewsST, byFeatureST, customerImagesST, texts, reviewThisProductST,
    } = this.state;
    return (
      <div className="ReviewModule">
        <CustomerReviews
          customerReviewsST={customerReviewsST}
          byFeatureST={byFeatureST}
        />
        <ReviewThisProduct
          handleClick={this.handleClick}
        />
        <div className="middle-container">
          <ImageCarousel
            customerImagesST={customerImagesST}
          />
          {reviewThisProductST
            ? <AddCommentPage />
            : (
              <ReviewComments
                texts={texts}
              />
            )}
        </div>
      </div>
    );
  }
}

export default ReviewModule;
