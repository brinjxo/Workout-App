import React from 'react';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'

//import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
