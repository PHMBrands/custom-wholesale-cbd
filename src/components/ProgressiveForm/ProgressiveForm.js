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

  testFunction = () => {
    console.log('test')
    return <div>Test Func</div>
  }

  updateSelectionsObject = (selection) => {
    this.setState({ currentDisplay: this.state.currentDisplay += 1 })
    let selections = { ...this.state.selections, [selection.selectionName]: selection.selectionValue }
    this.setState({ selections })
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
      <SelectionDisplay 
        currentSelections={ this.state.selections }
      />
    </section>

  }
}

export default ProgressiveForm;