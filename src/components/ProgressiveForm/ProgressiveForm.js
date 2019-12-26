import React, { Component } from 'react';
import SingleChoice from '../SingleChoice/SingleChoice';

class ProgressiveForm extends Component {
  constructor() {
    super()

    this.state = {
      selections: {},
      pricing: {},
      currentDisplay: 0
    }
  }

  testFunction = () => {
    console.log('test')
    return <div>Test Func</div>
  }

  updateSelectionsObject = (selection) => {
    // this.state.currentDisplay++

    this.setState({ currentDisplay: this.state.currentDisplay += 1 })
    // console.log('newDisplay', newDisplay)
    console.log(selection)
    let selections = { ...this.state.selections, [selection.selectionName]: selection.selectionValue }
    this.setState({ selections })
    // this.progressDisplay()
  }

  progressDisplay = () => {
    this.setState({ currentDisplay: this.state.currentDisplay++ })
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