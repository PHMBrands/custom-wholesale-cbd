import React, { Component } from 'react';
import SingleChoice from '../SingleChoice/SingleChoice';

class ProgressiveForm extends Component {
  constructor() {
    super()

    this.state = {
      selections: {},
      pricing: {},
      currentDisplay: ''
    }
  }

  

  testFunction = () => {
    console.log('test')
    return <div>Test Func</div>
  }



  render() {
    return <div> 
      <p>This is a test</p>
      <SingleChoice />
      { this.testFunction() }
    </div>

  }
}

export default ProgressiveForm;