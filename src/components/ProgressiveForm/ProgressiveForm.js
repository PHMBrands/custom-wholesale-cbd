import React, { Component } from 'react';
import SingleChoice from '../SingleChoice/SingleChoice';
import SelectionDisplay from '../SelectionDisplay/SelectionDisplay';

class ProgressiveForm extends Component {
  constructor() {
    super()

    this.state = {
      selections: {},
      pricing: {},
      currentDisplay: 0
    }
  }

  // testFunction = () => {
  //   console.log('test')
  //   return <div>Test Func</div>
  // }

  updateSelectionsObject = (selection) => {
    this.setState({ currentDisplay: this.state.currentDisplay += 1 })
    let selections = { ...this.state.selections, [selection.selectionName]: selection.selectionValue }
    this.setState({ selections })
  }

  progressDisplay = () => {
    this.setState({ currentDisplay: this.state.currentDisplay++ })
  }

  updateDisplay = (display) => {
    this.setState({ currentDisplay: display })
  }

  regressDisplay = () => {
    let newDisplay = this.state.currentDisplay - 1
    console.log(newDisplay)
    this.setState({ currentDisplay: newDisplay })
  }

  render() {
    return <section> 
      <button onClick={ this.regressDisplay }>BACK</button>
      <SingleChoice 
        currentDisplay={ this.state.currentDisplay } 
        updateSelectionsObject={ this.updateSelectionsObject }
      />
      <SelectionDisplay 
        currentSelections={ this.state.selections }
        updateDisplay={ this.updateDisplay }
      />
    </section>

  }
}

export default ProgressiveForm;