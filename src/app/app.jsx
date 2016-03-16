import React from 'react';
import { render } from 'react-dom';
import 'bootstrap-loader';
// import styles
import '../styles/app.scss'

class App extends React.Component {
  render() {
    return (
      <h1>HELLO WORLD!!!</h1>
    );
  }
}

// add react app to html element
render(< App />, document.getElementById('app'));
