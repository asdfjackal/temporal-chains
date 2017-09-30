import React, { Component } from 'react';
import './normalize.css';
import './skeleton.css';

import TimerList from './components/TimerList'
import AddTimer from './components/AddTimer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h2>Temporal Chains</h2>
        <AddTimer />
        <TimerList />

      </div>
    );
  }
}

export default App;
