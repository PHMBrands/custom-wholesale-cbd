import React, { Component } from 'react';
import SingleChoice from '../SingleChoice/SingleChoice';

class ProgressiveForm extends Component {
  constructor() {
    super()

    this.state = {
      selections: {},
      pricing: {},
      currentDisplay: 'quantity'
    }
  }

  testFunction = () => {
    console.log('test')
    return <div>Test Func</div>
  }

  updateSelectionsObject = (selection) => {
    console.log(selection)
    let selections = { ...this.state.selections, [selection.selectionName]: selection.selectionValue }
    this.setState({ selections })
  }



  render() {
    return <section> 
      <p>This is a test</p>
      <SingleChoice 
        currentDisplay={ this.state.currentDisplay } 
        updateSelectionsObject={ this.updateSelectionsObject }
      />
    </section>

  }
}

export default ProgressiveForm;