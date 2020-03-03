import React from 'react';

class ReviewComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true,
    };
    this.onButtonClicks = this.onButtonClicks.bind(this);
  }

  onButtonClicks() {
    this.setState((state) => ({
      selected: !state.selected,
    }));
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="ReviewComments">
        <div className="dropdown">
          <button
            type="button"
            className="dropbtn"
            onClick={this.onButtonClicks()}
          >
            Top Reviews
            <i className="fa fa-caret-down" />
          </button>
          <div
            className="dropdown-content"
            id="myDropdown"
            style={selected ? { display: 'block' } : { display: 'none' }}
          >
            <ul>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewComments;
