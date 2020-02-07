import React from 'react'
import Gym from '../../images/logo-selector/gym.svg';
import Hemp from '../../images/logo-selector/hemp.svg'
import Moon from '../../images/logo-selector/moon.svg';
import Yoga from '../../images/logo-selector/yoga.svg';

const LogoSelector = (props) => {

  // const functionTest = () => {
  //   console.log('test')
  // }

  return (
    <div>
      <p>Your logos goes here, in the meantime, select from one of these fun options.</p>
      {/* <input type="button" className="logo-button" name="logo" value="gym"><img src={ Gym } className="logo-sample" /></input> */}
      <button onClick={ () => props.setLogoChoice('gym') } className="logo-button">
        <img src={ Gym } className="logo-sample" />
      </button>
      <button onClick={ () => props.setLogoChoice('hemp') } className="logo-button">
        <img src={ Hemp } className="logo-sample" />
      </button>
      <button onClick={ () => props.setLogoChoice('yoga') } className="logo-button">
        <img src={ Yoga } className="logo-sample" />
      </button>
      <button onClick={ () => props.setLogoChoice('moon') } className="logo-button">
        <img src={ Moon } className="logo-sample" />
      </button>
    </div>
  );
}

export default LogoSelector