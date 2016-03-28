'use strict';

import React from 'react';

export default class Score extends React.Component {

  render() {
    return (
      <div className="score">
        <h4>Score:</h4>
        <span className="counter">{this.props.score}</span>
      </div>
    );
  }
}

Score.propTypes = {
  score: React.PropTypes.number.isRequired
}

Score.defaultProps = {
  score: 0
}
