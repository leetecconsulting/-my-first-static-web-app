import logo from './logo.svg';
import './App.css';
import main from './Images/main.png';
import graph from './Images/graph.png';
import chart from './Images/chart.png';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='div-title'>
          <h2>All natural bird repellent extracts from STARFISH</h2>
        </div>
        <div className='div-one'>
          <img src={main} className="App-logo" alt="chart" />
        </div>
          {/* <img src={graph} className="App-logo" alt="graph" />
        </div>
        <div className='div-one'>
          <img src={chart} className="App-logo" alt="chart" />
          <img src={graph} className="App-logo" alt="graph" />
        </div>
        
       <p>
          Edit <code>src/App.js</code> and save to reload this is update from jay.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
