import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './component/search';
import Content from './component/content';
import Watched from './component/watched';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="Header">
          <div id="logo" class="Logo">
          </div>
          <Search></Search>
        </header>
        <Content></Content>
          <Watched></Watched>
      </div>
    );
  }
}

export default App;
