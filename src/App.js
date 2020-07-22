import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Feed from './components/layout/Feed';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Feed />
    </div>
  );
}

export default App;
