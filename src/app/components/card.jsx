'use strict';

import React from 'react';

export default class Card extends React.Component {

  render() {
    return (
      <div className={`cards ${this.props.card}`}></div>
    );
  }
}

Card.propTypes = {
  card: React.PropTypes.string.isRequired
}
