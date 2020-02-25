import React from 'react';
import ProgressiveForm from './components/ProgressiveForm/ProgressiveForm';
import ViobinLogo from './images/White-Gold-Viobin-Logo.png';

function App() {



  

  return (
    <section className="App">
      {/* <header>
        <img src={ ViobinLogo } alt="Viobin Logo" className="viobin-logo" />
        <p>Build a Brand Tool</p>
      </header> */}
      <h1>Private label</h1>
      <h2>& White label made easy!</h2>
      <p>Are you looking for CBD products with your label on it? No problem! You can choose which of our preformulated products you want and order it right here. If you want to talk to a sales representative you can.... or you can simply use our CBD stock products builder and pay online today. NO BULL! Do it all online! Transpartent pricing and easy to use.</p>
      <ProgressiveForm />
      {/* <footer>
        <p>© Copyright VIOBIN</p>
      </footer> */}
    </section>
  );
}

export default App;
