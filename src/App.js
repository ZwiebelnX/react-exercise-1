import React, { Component } from 'react';
import './App.scss';
import MyTitle from './compnents/title/my-title';
import About from './compnents/about/about';
import Education from './compnents/education/education';

class App extends Component {
  render() {
    return (
      <main className="app">
        <MyTitle />
        <hr style={{ border: '3px solid', color: '#e3e3e3' }} />
        <About />
        <Education />
      </main>
    );
  }
}

export default App;
