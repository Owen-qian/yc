// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Game from './Game/Game'

const Welcome = () => (
  <><header className="App-header">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>
      Welcome to Peak Performance!
    </h1>
    <p>
      <a
        className="Arc'teryx link"
        href="https://arcteryx.com/ca/en"
      >
        Go to arc'teryx
      </a>
    </p>
    <Link to="/game">
        <button>Start game!</button>
    </Link>
  </header></>
)

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="/" element={<Welcome />} />
          </Routes>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
