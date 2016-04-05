import React from 'react';

export default class ModeButton extends React.Component {

  switch() {
    this.props.toggleMode();
  }

  render() {
    return (
      <div className="mode">
        <span>Hard Mode</span>
        <input type="checkbox" name="toggle" className="toggle" onClick={this.switch.bind(this)} />
        <label htmlFor="toggle"></label>
      </div>
    );
  }
}
