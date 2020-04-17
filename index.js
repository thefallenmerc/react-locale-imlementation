import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Locale } from './_components/locale.component';
import { Home } from './_components/home.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Locale>
          <Home />
        </Locale>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
