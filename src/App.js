import React, { Component } from 'react';
import logo from './logo.svg';
import './Bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Divider></Divider>
    );
  }
}

var Divider = React.createClass({
  render: function() {
    return (
    <div className="divider">
      <h2>Questions</h2><hr/>
    </div>
    );
  }
});

export default App;
