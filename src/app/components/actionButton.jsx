'use strict';

import React from 'react';

export default class ActionButton extends React.Component {

  constructor(props) {
    super(props);
  }

  hitClick() {
    this.props.hitButton();
  }

  stickClick() {
    this.props.stickButton();
  }

  render() {
    return (
      <div className="actionBtn">
        <button className="hit btn-success" onClick={this.hitClick.bind(this)}>Hit</button>
        <button className='stick btn-danger' onClick={this.stickClick.bind(this)}>Stand</button>
      </div>
    );
  }
}

ActionButton.propTypes = {
  hitButton: React.PropTypes.func.isRequired,
  stickButton: React.PropTypes.func.isRequired
}
