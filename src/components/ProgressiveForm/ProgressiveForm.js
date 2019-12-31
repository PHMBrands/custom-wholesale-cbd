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

  render() {
    return <section> 
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