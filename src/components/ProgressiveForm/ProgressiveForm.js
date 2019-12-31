import React, { Component } from 'react';
import SingleChoice from '../SingleChoice/SingleChoice';
import SelectionDisplay from '../SelectionDisplay/SelectionDisplay';

class ProgressiveForm extends Component {
  constructor() {
    super()

    this.state = {
      selections: {},
      pricing: {},
      currentDisplay: 0,
      stashedDisplay: undefined
    }
  }

  // testFunction = () => {
  //   console.log('test')
  //   return <div>Test Func</div>
  // }

  updateSelectionsObject = (selection) => {
    if (this.state.stashedDisplay) {
      let newDisplay = this.state.stashedDisplay
      let selections = { ...this.state.selections, [selection.selectionName]: selection.selectionValue }
      this.setState({ selections, currentDisplay: newDisplay, stashedDisplay: undefined })

    } else {
      let selections = { ...this.state.selections, [selection.selectionName]: selection.selectionValue }
      this.setState({ selections, currentDisplay: this.state.currentDisplay += 1  })
    }

    // this.setState({ currentDisplay: this.state.currentDisplay += 1 });
    // this.setState({ selections })
  }

  // progressDisplay = () => {
  //   this.setState({ currentDisplay: this.state.currentDisplay++ })
  // }

  updateDisplay = (display) => {
    let stashedDisplay = this.state.currentDisplay;
    this.setState({ currentDisplay: display, stashedDisplay })
  }

  regressDisplay = () => {
    let newDisplay = this.state.currentDisplay - 1;
    this.setState({ currentDisplay: newDisplay })
  }

  render() {
    return <section> 
      <button onClick={ this.regressDisplay }>BACK</button>
      <SingleChoice 
        currentDisplay={ this.state.currentDisplay } 
        updateSelectionsObject={ this.updateSelectionsObject }
        stashedDisplay={ this.state.stashedDisplay }
      />
      <SelectionDisplay 
        currentSelections={ this.state.selections }
        updateDisplay={ this.updateDisplay }
      />
    </section>

  }
}

export default ProgressiveForm;