import React from 'react';
// import './App.css';
import ProgressiveForm from './components/ProgressiveForm/ProgressiveForm';
import ViobinLogo from './images/LargeViobinLogo.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={ ViobinLogo } className="viobin-logo" />
      </header>
      <ProgressiveForm />
    </div>
  );
}

export default App;
