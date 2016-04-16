'use strict';

import React from 'react';

export default class Message extends React.Component {

  render() {
    return (
      <div className="result-message">
        <h3>{this.props.message}</h3>
      </div>
    )
  }
}

Message.propTypes = {
  message: React.PropTypes.string.isRequired
}

Message.defaultProps = {
  message: 'missing'
}
