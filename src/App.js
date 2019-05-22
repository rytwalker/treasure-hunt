import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';
import GraphMap from './components/GraphMap';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={GraphMap} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
