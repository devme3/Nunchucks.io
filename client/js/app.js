import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Rating extends Component {
  constructor(props) {
    super(props);

    this.handleRatingClick = this.handleRatingClick.bind(this);

    this.state = {
      rating: 0,
    };
  }

  handleRatingClick(rating) {
    this.setState({ rating });
  }

  render() {
    const ratingClassNames = [];

    for (let i = 0; i < this.props.possibleRatings.length; i += 1) {
      if (this.state.rating > i) {
        ratingClassNames[i] = 'star active';
      } else {
        ratingClassNames[i] = 'star';
      }
    }

    return (
      <div className="rating-container">
        {this.props.possibleRatings.map(rating =>
          (<div
            role="button"
            tabIndex={rating}
            className={ratingClassNames[rating - 1]}
            key={rating}
            onClick={() => this.handleRatingClick(rating)}
          >★
          </div>),
        )}
      </div>
    );
  }
}

Rating.propTypes = {
  possibleRatings: PropTypes.instanceOf(Array).isRequired,
};

ReactDOM.render(
  <Rating possibleRatings={[1, 2, 3, 4, 5]} />,
  document.getElementById('app'),
);
