import React, { Component } from 'react';

class SingleChoice extends Component {
  constructor(props) {
    super()

    this.state = {
      selectionName: '',
      selectionValue: undefined
    }
  }

  componentDidMount = () => {
    console.log('test mount')
    switch(this.props.currentDisplay) {
      case 'quantity':
        console.log('switch test')
        this.setState({ selectionName: 'quantity', selectionValue: 100 })
        return 
      default:
        return console.log('error')
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

  displayChoice = (status) => {
    switch(status) {
      case 'quantity':
        return <article>
            <h4>Please Select a quantity below:</h4>
            <form>
              <input 
                type="number" 
                placeholder="100"
                name="quantity"
                value={ this.state.selectionValue}
                onChange={ this.handleChange }
              />
              <button onClick={ this.handleClick }>SUBMIT</button>
            </form>
          </article>
      case 'container':
        return <article>
            <form>
              <input type="radio" id="15ml" name="drone" />
              <label for="15ml">15mL</label>
              <input type="radio" id="30ml" name="drone" />
              <label for="30ml">30mL</label>
              <button>SUBMIT</button>
            </form>
          </article>
      case 'flavor':
        return
      case 'carrier':
        return
      case 'spectrum':
        return
      case 'potency':
        return
      default:
        return <div>We're sorry, something seems to have gone wrong. Please reload the page.</div>  
    }
  }

  render () {
    return <div>
      { this.displayChoice(this.props.currentDisplay) }
    </div>
  }
}

export default SingleChoice;