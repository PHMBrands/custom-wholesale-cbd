import React, { Component } from 'react';

class SelectionDisplay extends Component {
  constructor() {
    super()
  }

  renderSelections = (productSelected) => {
    switch (productSelected) {
      case 'Tinctures':
        return <article className="selection-display">
            <button onClick={ () => this.props.updateDisplay(0) }>Quantity: {this.props.currentSelections.quantity}</button>
            <button onClick={() => this.props.updateDisplay(1) }>Flavor: { this.props.currentSelections.flavor }</button>
            <button onClick={() => this.props.updateDisplay(2) }>Carrier Oil: { this.props.currentSelections.carrier }</button>
            <button onClick={() => this.props.updateDisplay(3) }>Spectrum: { this.props.currentSelections.spectrum }</button>
            <button onClick={() => this.props.updateDisplay(4) }>Potency: { this.props.currentSelections.potency }</button>
          </article>
      case 'Softgels':
        return <article>
            <button onClick={ () => this.props.updateDisplay(0) }>Quantity: {this.props.currentSelections.quantity}</button>
            <button onClick={() => this.props.updateDisplay(1) }>Softgel Size: { this.props.currentSelections.softgelSize }</button> 
            <button onClick={() => this.props.updateDisplay(2) }>Carrier Oil: { this.props.currentSelections.carrier }</button>
            <button onClick={() => this.props.updateDisplay(3) }>Spectrum: { this.props.currentSelections.spectrum }</button>
            <button onClick={() => this.props.updateDisplay(4) }>Potency: { this.props.currentSelections.potency }</button>
            <button onClick={() => this.props.updateDisplay(5) }>Softgels per bottle: { this.props.currentSelections.softgelPerBottle }</button>
          </article>
      case 'Topicals':
        return <article>
            <button onClick={ () => this.props.updateDisplay(0) }>Quantity: {this.props.currentSelections.quantity}</button>
            <button onClick={() => this.props.updateDisplay(3) }>Spectrum: { this.props.currentSelections.spectrum }</button>
            <button onClick={() => this.props.updateDisplay(4) }>Scent: { this.props.currentSelections.scent }</button>
            <button onClick={() => this.props.updateDisplay(4) }>Potency: { this.props.currentSelections.potency }</button>
          </article>
      case 'products':
        return <p></p> 
      case 'company':
        return <p></p>   
      default:
        return <p>Something went wrong with the renderSelections function in the SelectionDisplay component.</p>
    }
  }


  render() {

    return <section className="selection-display">
        { this.renderSelections(this.props.productSelected) }
        {/* <button onClick={ () => this.props.updateDisplay(0) }>Quantity: {this.props.currentSelections.quantity}</button>
        <button onClick={() => this.props.updateDisplay(1) }>Container Size: { this.props.currentSelections.container }</button> 
        <button onClick={() => this.props.updateDisplay(1) }>Softgel Size: { this.props.currentSelections.softgelSize }</button> 
        <button onClick={() => this.props.updateDisplay(1) }>Flavor: { this.props.currentSelections.flavor }</button>
        <button onClick={() => this.props.updateDisplay(2) }>Carrier Oil: { this.props.currentSelections.carrier }</button>
        <button onClick={() => this.props.updateDisplay(3) }>Spectrum: { this.props.currentSelections.spectrum }</button>
        <button onClick={() => this.props.updateDisplay(4) }>Scent: { this.props.currentSelections.scent }</button>
        <button onClick={() => this.props.updateDisplay(4) }>Potency: { this.props.currentSelections.potency }</button>
        <button onClick={() => this.props.updateDisplay(5) }>Softgels per bottle: { this.props.currentSelections.softgelPerBottle }</button> */}
      </section>
  }

}

export default SelectionDisplay