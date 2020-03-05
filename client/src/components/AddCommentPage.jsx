import React from 'react';

const AddCommentPage = () => (
  <div className="addCommentPage">
    <form>
      <label htmlFor="hello">
        Add a headline
        <input
          type="text"
          placeholder="Whats most important to know?"
          id="hello"
        />
      </label>
      <label htmlFor="review">
        Write your review
        <input
          type="text"
          placeholder="What did you like or dislike? What did you use this product for?"
          id="review"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);


export default AddCommentPage;
