import React, {Component} from 'react';

import { Portfolio } from './Portfolio/Portfolio.js'
import './App.css';

export class App extends Component {
    constructor () {
    super();
    
    this.state = {
      selectedSection: ""
    };
  }

  render () {
    return (
      <div className="App">
          <p>
              <Portfolio />
          </p>
      </div>

    );
  }
}

export default App;
