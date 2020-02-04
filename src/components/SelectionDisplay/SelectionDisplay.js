import React, { Component } from 'react';

class SelectionDisplay extends Component {
  constructor() {
    super()
  }



  renderSelections = (productSelected) => {
    console.log(this.props.currentDisplay)
    switch (productSelected) {
      case 'Tinctures':
        return <article className="selection-display">
                                  {/* Quantity Button */}
            { (this.props.currentSelections.quantity && (this.props.currentDisplay !== 0)) && 
              <button onClick={() => this.props.updateDisplay(0) } className="selection-display-completed">Quantity: { this.props.currentSelections.quantity } </button> }
            { ((this.props.currentSelections.quantity === undefined) && (this.props.currentDisplay !== 0)) && 
              <button onClick={() => this.props.updateDisplay(0) } className="selection-display-future">Quantity: { this.props.currentSelections.quantity }</button> }
            { (this.props.currentDisplay === 0) && 
              <button onClick={() => this.props.updateDisplay(0) } className="selection-display-current">Quantity: { this.props.currentSelections.quantity }</button> }

                                  {/* Flavor Button */}
            { (this.props.currentSelections.flavor && (this.props.currentDisplay !== 1)) && 
              <button onClick={() => this.props.updateDisplay(1) } className="selection-display-completed">Flavor: { this.props.currentSelections.flavor } </button> }
            { ((this.props.currentSelections.flavor === undefined) && (this.props.currentDisplay !== 1)) && 
              <button onClick={() => this.props.updateDisplay(1) } className="selection-display-future">Flavor: { this.props.currentSelections.flavor }</button> }
            { (this.props.currentDisplay === 1) && 
              <button onClick={() => this.props.updateDisplay(1) } className="selection-display-current">Flavor: { this.props.currentSelections.flavor }</button> }

                                  {/* Carrier Button */}
            { (this.props.currentSelections.carrier && (this.props.currentDisplay !== 2)) && 
              <button onClick={() => this.props.updateDisplay(2) } className="selection-display-completed">Carrier Oil: { this.props.currentSelections.carrier } </button> }
            { ((this.props.currentSelections.carrier === undefined) && (this.props.currentDisplay !== 2)) && 
              <button onClick={() => this.props.updateDisplay(2) } className="selection-display-future">Carrier Oil: { this.props.currentSelections.carrier }</button> }
            { (this.props.currentDisplay === 2) && 
              <button onClick={() => this.props.updateDisplay(2) } className="selection-display-current">Carrier Oil: { this.props.currentSelections.carrier }</button> }

                                    {/* Spectrum Button */}
            { (this.props.currentSelections.spectrum && (this.props.currentDisplay !== 3)) && 
              <button onClick={() => this.props.updateDisplay(3) } className="selection-display-completed">Spectrum: { this.props.currentSelections.spectrum } </button> }
            { ((this.props.currentSelections.spectrum === undefined) && (this.props.currentDisplay !== 3)) && 
              <button onClick={() => this.props.updateDisplay(3) } className="selection-display-future">Spectrum: { this.props.currentSelections.spectrum }</button> }
            { (this.props.currentDisplay === 3) && 
              <button onClick={() => this.props.updateDisplay(3) } className="selection-display-current">Spectrum: { this.props.currentSelections.spectrum }</button> }


            {/* <button onClick={ () => this.props.updateDisplay(0) }>Quantity: {this.props.currentSelections.quantity}</button> */}
            {/* <button onClick={() => this.props.updateDisplay(1) }>Flavor: { this.props.currentSelections.flavor }</button> */}
            {/* <button onClick={() => this.props.updateDisplay(2) }>Carrier Oil: { this.props.currentSelections.carrier }</button> */}
            {/* <button onClick={() => this.props.updateDisplay(3) }>Spectrum: { this.props.currentSelections.spectrum }</button> */}
                        {/* Potency Button */}
            { (this.props.currentSelections.potency && (this.props.currentDisplay !== 4)) && 
              <button onClick={() => this.props.updateDisplay(4) } className="selection-display-completed">Potency: { this.props.currentSelections.potency } </button> }
            { ((this.props.currentSelections.potency === undefined) && (this.props.currentDisplay !== 4)) && 
              <button onClick={() => this.props.updateDisplay(4) } className="selection-display-future">Potency: { this.props.currentSelections.potency }</button> }
            { (this.props.currentDisplay === 4) && 
              <button onClick={() => this.props.updateDisplay(4) } className="selection-display-current">Potency: { this.props.currentSelections.potency }</button> }
          </article>
      case 'Softgels':
        return <article>
                        {/* Quantity Button */}
            { (this.props.currentSelections.quantity && (this.props.currentDisplay !== 0)) && 
              <button onClick={() => this.props.updateDisplay(0) } className="selection-display-completed">Quantity: { this.props.currentSelections.quantity } </button> }
            { ((this.props.currentSelections.quantity === undefined) && (this.props.currentDisplay !== 0)) && 
              <button onClick={() => this.props.updateDisplay(0) } className="selection-display-future">Quantity: { this.props.currentSelections.quantity }</button> }
            { (this.props.currentDisplay === 0) && 
              <button onClick={() => this.props.updateDisplay(0) } className="selection-display-current">Quantity: { this.props.currentSelections.quantity }</button> }

                         {/* Quantity Button */}
            { (this.props.currentSelections.softgelSize && (this.props.currentDisplay !== 1)) && 
              <button onClick={() => this.props.updateDisplay(1) } className="selection-display-completed">Softgel Size: { this.props.currentSelections.softgelSize } </button> }
            { ((this.props.currentSelections.softgelSize === undefined) && (this.props.currentDisplay !== 1)) && 
              <button onClick={() => this.props.updateDisplay(1) } className="selection-display-future">Softgel Size: { this.props.currentSelections.softgelSize }</button> }
            { (this.props.currentDisplay === 1) && 
              <button onClick={() => this.props.updateDisplay(1) } className="selection-display-current">Softgel Size: { this.props.currentSelections.softgelSize }</button> }

                                  {/* Carrier Button */}
            { (this.props.currentSelections.carrier && (this.props.currentDisplay !== 2)) && 
              <button onClick={() => this.props.updateDisplay(2) } className="selection-display-completed">Carrier Oil: { this.props.currentSelections.carrier } </button> }
            { ((this.props.currentSelections.carrier === undefined) && (this.props.currentDisplay !== 2)) && 
              <button onClick={() => this.props.updateDisplay(2) } className="selection-display-future">Carrier Oil: { this.props.currentSelections.carrier }</button> }
            { (this.props.currentDisplay === 2) && 
              <button onClick={() => this.props.updateDisplay(2) } className="selection-display-current">Carrier Oil: { this.props.currentSelections.carrier }</button> }

                                  {/* Spectrum Button */}
            { (this.props.currentSelections.spectrum && (this.props.currentDisplay !== 3)) && 
              <button onClick={() => this.props.updateDisplay(3) } className="selection-display-completed">Spectrum: { this.props.currentSelections.spectrum } </button> }
            { ((this.props.currentSelections.spectrum === undefined) && (this.props.currentDisplay !== 3)) && 
              <button onClick={() => this.props.updateDisplay(3) } className="selection-display-future">Spectrum: { this.props.currentSelections.spectrum }</button> }
            { (this.props.currentDisplay === 3) && 
              <button onClick={() => this.props.updateDisplay(3) } className="selection-display-current">Spectrum: { this.props.currentSelections.spectrum }</button> }

                                  {/* Potency Button */}
            { (this.props.currentSelections.potency && (this.props.currentDisplay !== 4)) && 
              <button onClick={() => this.props.updateDisplay(4) } className="selection-display-completed">Potency: { this.props.currentSelections.potency } </button> }
            { ((this.props.currentSelections.potency === undefined) && (this.props.currentDisplay !== 4)) && 
              <button onClick={() => this.props.updateDisplay(4) } className="selection-display-future">Potency: { this.props.currentSelections.potency }</button> }
            { (this.props.currentDisplay === 4) && 
              <button onClick={() => this.props.updateDisplay(4) } className="selection-display-current">Potency: { this.props.currentSelections.potency }</button> }

                                  {/* Softgels per Bottle Button */}
            { (this.props.currentSelections.softgelPerBottle && (this.props.currentDisplay !== 5)) && 
              <button onClick={() => this.props.updateDisplay(5) } className="selection-display-completed">Softgels per Bottle: { this.props.currentSelections.softgelPerBottle } </button> }
            { ((this.props.currentSelections.softgelPerBottle === undefined) && (this.props.currentDisplay !== 5)) && 
              <button onClick={() => this.props.updateDisplay(5) } className="selection-display-future">Softgels per Bottle: { this.props.currentSelections.softgelPerBottle }</button> }
            { (this.props.currentDisplay === 5) && 
              <button onClick={() => this.props.updateDisplay(5) } className="selection-display-current">Softgels per Bottle: { this.props.currentSelections.softgelPerBottle }</button> }



            {/* <button onClick={ () => this.props.updateDisplay(0) }>Quantity: {this.props.currentSelections.quantity}</button> */}
            {/* <button onClick={() => this.props.updateDisplay(1) }>Softgel Size: { this.props.currentSelections.softgelSize }</button>  */}
            {/* <button onClick={() => this.props.updateDisplay(2) }>Carrier Oil: { this.props.currentSelections.carrier }</button> */}
            {/* <button onClick={() => this.props.updateDisplay(3) }>Spectrum: { this.props.currentSelections.spectrum }</button> */}
            {/* <button onClick={() => this.props.updateDisplay(4) }>Potency: { this.props.currentSelections.potency }</button> */}
            {/* <button onClick={() => this.props.updateDisplay(5) }>Softgels per bottle: { this.props.currentSelections.softgelPerBottle }</button> */}
          </article>
      case 'Topicals':
        return <article>
                                  {/* Quantity Button */}
            { (this.props.currentSelections.quantity && (this.props.currentDisplay !== 0)) && 
              <button onClick={() => this.props.updateDisplay(0) } className="selection-display-completed">Quantity: { this.props.currentSelections.quantity } </button> }
            { ((this.props.currentSelections.quantity === undefined) && (this.props.currentDisplay !== 0)) && 
              <button onClick={() => this.props.updateDisplay(0) } className="selection-display-future">Quantity: { this.props.currentSelections.quantity }</button> }
            { (this.props.currentDisplay === 0) && 
              <button onClick={() => this.props.updateDisplay(0) } className="selection-display-current">Quantity: { this.props.currentSelections.quantity }</button> }

                                  {/* Spectrum Button */}
            { (this.props.currentSelections.spectrum && (this.props.currentDisplay !== 1)) && 
              <button onClick={() => this.props.updateDisplay(1) } className="selection-display-completed">Spectrum: { this.props.currentSelections.spectrum } </button> }
            { ((this.props.currentSelections.spectrum === undefined) && (this.props.currentDisplay !== 1)) && 
              <button onClick={() => this.props.updateDisplay(1) } className="selection-display-future">Spectrum: { this.props.currentSelections.spectrum }</button> }
            { (this.props.currentDisplay === 1) && 
              <button onClick={() => this.props.updateDisplay(1) } className="selection-display-current">Spectrum: { this.props.currentSelections.spectrum }</button> }

                                  {/* Scent Button */}
            { (this.props.currentSelections.scent && (this.props.currentDisplay !== 2)) && 
              <button onClick={() => this.props.updateDisplay(2) } className="selection-display-completed">Scent: { this.props.currentSelections.scent } </button> }
            { ((this.props.currentSelections.scent === undefined) && (this.props.currentDisplay !== 2)) && 
              <button onClick={() => this.props.updateDisplay(2) } className="selection-display-future">Scent: { this.props.currentSelections.scent }</button> }
            { (this.props.currentDisplay === 2) && 
              <button onClick={() => this.props.updateDisplay(2) } className="selection-display-current">Scent: { this.props.currentSelections.scent }</button> }

                                  {/* Potency Button */}
            { (this.props.currentSelections.potency && (this.props.currentDisplay !== 3)) && 
              <button onClick={() => this.props.updateDisplay(3) } className="selection-display-completed">Potency: { this.props.currentSelections.potency } </button> }
            { ((this.props.currentSelections.potency === undefined) && (this.props.currentDisplay !== 3)) && 
              <button onClick={() => this.props.updateDisplay(3) } className="selection-display-future">Potency: { this.props.currentSelections.potency }</button> }
            { (this.props.currentDisplay === 3) && 
              <button onClick={() => this.props.updateDisplay(3) } className="selection-display-current">Potency: { this.props.currentSelections.potency }</button> }



            {/* <button onClick={ () => this.props.updateDisplay(0) }>Quantity: {this.props.currentSelections.quantity}</button> */}
            {/* <button onClick={() => this.props.updateDisplay(1) }>Spectrum: { this.props.currentSelections.spectrum }</button> */}
            {/* <button onClick={() => this.props.updateDisplay(2) }>Scent: { this.props.currentSelections.scent }</button> */}
            {/* <button onClick={() => this.props.updateDisplay(3) }>Potency: { this.props.currentSelections.potency }</button> */}
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