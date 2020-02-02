import React from 'react';
import ProgressiveForm from './components/ProgressiveForm/ProgressiveForm';
import ViobinLogo from './images/LargeViobinLogo.png';

function App() {

  return (
    <section className="App">
      <header>
        <img src={ ViobinLogo } className="viobin-logo" />
      </header>
      <section className="progressive-form">
        <ProgressiveForm />
      </section>
      <footer>
        <p>Copyright VIOBIN</p>
      </footer>
    </section>
  );
}

export default App;
