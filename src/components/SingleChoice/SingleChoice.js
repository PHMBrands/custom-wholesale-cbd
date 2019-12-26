import React, { Component } from 'react';

class SingleChoice extends Component {
  constructor(props) {
    super()

    this.state = {
      selectionName: '',
      selectionValue: undefined
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.updateSelectionsObject(this.state)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ selectionName: name, selectionValue: value })
  }

  testFunction = () => {
    
  }

  displayChoice = (status) => {
    switch(status) {
      case 'quantity':
        this.testFunction()
        // this.setState({ selectionName: 'quantity', selectionValue: 100 })
        return <article>
          <h4>Please Select a quantity below:</h4>
          <form>
            <input 
              type="number" 
              placeholder="100"
              name="quantity"
              value={ this.state.selectionValue }
              onChange={ this.handleChange }
            />
            <button onClick={ this.handleClick }>SUBMIT</button>
          </form>
        </article>
      case 'container':
        return
      case 'flavor':
        return
      case 'carrier':
        return
      case 'spectrum':
        return
      case 'potency':
        return
      default:
        return <div>We're sorry, something seems to have gone wrong. Please reload.</div>  
    }
  }

  render () {
    return <div>
      { this.displayChoice(this.props.currentDisplay) }
    </div>
  }
}

export default SingleChoice;