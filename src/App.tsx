import React from 'react';
import './App.css';
import LogoPulse from './components/LogoPulse';
import SparkParticles from './components/SparkParticles'; // Import SparkParticles

const App = () => {
  return (
    <div className="App">
      <SparkParticles /> {/* This will render the spark particles effect */}
      <LogoPulse />
    </div>
  );
}

export default App;
