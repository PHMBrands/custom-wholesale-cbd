import React, { Component } from 'react';
import GymMan from '../../images/logo-selector/gym.svg';

class TestPrintComponent extends Component {


  testRender = (status) => {
    switch (status) {
      case 'products':
        return <p>This conditional render is working for the test component</p>
      default:
        return <p>This did not work</p>
    }
  }

  render() {
    return <div>
      <img src={ GymMan }/>
      <p>This is a practice component for printing</p>
      <h1>Text can be really big</h1>
      <h4>Or not as big</h4>
      <p>{ this.testRender(this.props.productSelected) }</p>

    </div>
  }
}

export default TestPrintComponent;
