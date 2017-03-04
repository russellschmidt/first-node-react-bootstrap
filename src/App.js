import React, { Component } from 'react';
import logo from './logo.svg';
import './Bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <MessagePanel>
      <MessagePanel.Heading text="Show/Hide" />
      <MessagePanel.Content>
        Smelly Phallus
      </MessagePanel.Content>
      </MessagePanel>
    );
  }
}

// var MyApp = React.createClass({

// });

var MessagePanel = React.createClass({
  render: function() {
    return <div className="collapse in">
      {this.props.children}</div>
  }
});

MessagePanel.Heading = React.createClass({
  render: function() {
    return <h2>{this.props.text}</h2>
  }
});

MessagePanel.Content = React.createClass({
  render: function() {
    return <div className="well">
      {this.props.children} </div>
  }
});


export default App;
