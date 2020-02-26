import React from 'react'
// import Gym from '../../images/logo-selector/gym.svg';
// import Hemp from '../../images/logo-selector/hemp.svg'
// import Moon from '../../images/logo-selector/moon.svg';
// import Yoga from '../../images/logo-selector/yoga.svg';
import GreenCross from '../../images/logo-selector/green-health-icon.png';
import Mortar from '../../images/logo-selector/hemp-mortar.png';
import LeafLogo from '../../images/logo-selector/leaf-logo-icon.png';
import LeafPremium from '../../images/logo-selector/leaf-premium.png';
import PremiumLeaf from '../../images/logo-selector/premium-leaf.png';

const LogoSelector = (props) => {

  // const functionTest = () => {
  //   console.log('test')
  // }

  return (
    <div>
      <p>Your logo goes here, in the meantime, select from one of these fun options:</p>
      {/* <input type="button" className="logo-button" name="logo" value="gym"><img src={ Gym } className="logo-sample" /></input> */}
      <button onClick={ () => props.setLogoChoice('green cross') } className="logo-button">
        <img src={ GreenCross } alt="Gym icon" className="logo-sample" />
      </button>
      <button onClick={ () => props.setLogoChoice('leaf premium') } className="logo-button">
        <img src={ LeafPremium } alt="Moon icon" className="logo-sample" />
      </button>
      <button onClick={ () => props.setLogoChoice('premium leaf') } className="logo-button">
        <img src={ PremiumLeaf } alt="Moon icon" className="logo-sample" />
      </button>
      <button onClick={ () => props.setLogoChoice('mortar') } className="logo-button">
        <img src={ Mortar } alt="Hemp icon" className="logo-sample" />
      </button>
      <button onClick={ () => props.setLogoChoice('leaf logo') } className="logo-button">
        <img src={ LeafLogo } alt="Yoga icon" className="logo-sample" />
      </button>
    </div>
  );
}

export default LogoSelector