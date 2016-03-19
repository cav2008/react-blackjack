'use strict';

import React from 'react';

export default class ActionButton extends React.Component {

  render() {
    return (
      <div className="actionBtn">
        <button className="hit btn-success">Hit</button>
        <button className='stick btn-danger'>Stick</button>
      </div>
    );
  }
}
