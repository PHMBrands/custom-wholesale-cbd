import React, { Component } from 'react';

class SelectionDisplay extends Component {

  renderSelections = (productSelected) => {
    switch (productSelected) {
      case 'Tinctures':
        return <article className="selection-display">
                                  {/* Product Button */}
            { (this.props.company.email) && 
              <button onClick={ this.props.backToCompanyInfo } className="selection-display-completed">Company Info</button> }
            {/* { ((this.props.currentSelections.quantity === undefined) && (this.props.currentDisplay !== 0)) && 
              <button onClick={ this.props.backToCompanyInfo } className="selection-display-future">Company Info</button> } */}
            { (this.props.productSelected === 'company') && 
              <button onClick={ this.props.backToCompanyInfo } className="selection-display-current">Company Info</button> }

                                  {/* Quantity Button */}
            { (this.props.currentSelections.quantity && (this.props.currentDisplay !== 'quantity')) && 
              <button onClick={() => this.props.updateDisplay('quantity') } className="selection-display-completed">Quantity: { this.props.currentSelections.quantity } </button> }
            { ((this.props.currentSelections.quantity === undefined) && (this.props.currentDisplay !== 'quantity')) && 
              <button onClick={() => this.props.updateDisplay('quantity') } className="selection-display-future">Quantity: { this.props.currentSelections.quantity }</button> }
            { (this.props.currentDisplay === 'quantity') && 
              <button onClick={() => this.props.updateDisplay('quantity') } className="selection-display-current">Quantity: { this.props.currentSelections.quantity }</button> }

                                    {/* Flavor Button */}
            { (this.props.currentSelections.flavor && (this.props.currentDisplay !== 'flavor')) && 
              <button onClick={() => this.props.updateDisplay('flavor') } className="selection-display-completed">Flavor: { this.props.currentSelections.flavor } </button> }
            { ((this.props.currentSelections.flavor === undefined) && (this.props.currentDisplay !== 'flavor')) && 
              <button onClick={() => this.props.updateDisplay('flavor') } className="selection-display-future">Flavor: { this.props.currentSelections.flavor }</button> }
            { (this.props.currentDisplay === 'flavor') && 
              <button onClick={() => this.props.updateDisplay('flavor') } className="selection-display-current">Flavor: { this.props.currentSelections.flavor }</button> }

                                    {/* Carrier Button */}
            { (this.props.currentSelections.carrier && (this.props.currentDisplay !== 'carrier')) && 
              <button onClick={() => this.props.updateDisplay('carrier') } className="selection-display-completed">Carrier Oil: { this.props.currentSelections.carrier } </button> }
            { ((this.props.currentSelections.carrier === undefined) && (this.props.currentDisplay !== 'carrier')) && 
              <button onClick={() => this.props.updateDisplay('carrier') } className="selection-display-future">Carrier Oil: { this.props.currentSelections.carrier }</button> }
            { (this.props.currentDisplay === 'carrier') && 
              <button onClick={() => this.props.updateDisplay('carrier') } className="selection-display-current">Carrier Oil: { this.props.currentSelections.carrier }</button> }

                                    {/* Spectrum Button */}
            { (this.props.currentSelections.spectrum && (this.props.currentDisplay !== 'spectrum')) && 
              <button onClick={() => this.props.updateDisplay('spectrum') } className="selection-display-completed">Spectrum: { this.props.currentSelections.spectrum } </button> }
            { ((this.props.currentSelections.spectrum === undefined) && (this.props.currentDisplay !== 'spectrum')) && 
              <button onClick={() => this.props.updateDisplay('spectrum') } className="selection-display-future">Spectrum: { this.props.currentSelections.spectrum }</button> }
            { (this.props.currentDisplay === 'spectrum') && 
              <button onClick={() => this.props.updateDisplay('spectrum') } className="selection-display-current">Spectrum: { this.props.currentSelections.spectrum }</button> }

                                    {/* Potency Button */}
            { (this.props.currentSelections.potency && (this.props.currentDisplay !== 'potency')) && 
              <button onClick={() => this.props.updateDisplay('potency') } className="selection-display-completed">Potency: { this.props.currentSelections.potency } </button> }
            { ((this.props.currentSelections.potency === undefined) && (this.props.currentDisplay !== 'potency')) && 
              <button onClick={() => this.props.updateDisplay('potency') } className="selection-display-future">Potency: { this.props.currentSelections.potency }</button> }
            { (this.props.currentDisplay === 'potency') && 
              <button onClick={() => this.props.updateDisplay('potency') } className="selection-display-current">Potency: { this.props.currentSelections.potency }</button> }

                                    {/* Logo Button */}
            { (this.props.logoChoice && (this.props.currentDisplay !== 'logo')) && 
              <button onClick={() => this.props.updateDisplay('logo') } className="selection-display-completed">Logo</button> }
            { ((this.props.logoChoice === undefined) && (this.props.currentDisplay !== 'logo')) && 
              <button onClick={() => this.props.updateDisplay('logo') } className="selection-display-future">Logo</button> }
            { (this.props.currentDisplay === 'logo') && 
              <button onClick={() => this.props.updateDisplay('logo') } className="selection-display-current">Logo</button> }            

          </article>
      case 'Softgels':
        return <article>
                                      {/* Product Button */}
            { (this.props.company.email) && 
              <button onClick={ this.props.backToCompanyInfo } className="selection-display-completed">Company Info</button> }
            {/* { ((this.props.currentSelections.quantity === undefined) && (this.props.currentDisplay !== 0)) && 
              <button onClick={ this.props.backToCompanyInfo } className="selection-display-future">Company Info</button> } */}
            { (this.props.productSelected === 'company') && 
              <button onClick={ this.props.backToCompanyInfo } className="selection-display-current">Company Info</button> }

                                  {/* Quantity Button */}
            { (this.props.currentSelections.quantity && (this.props.currentDisplay !== 'quantity')) && 
              <button onClick={() => this.props.updateDisplay('quantity') } className="selection-display-completed">Quantity: { this.props.currentSelections.quantity } </button> }
            { ((this.props.currentSelections.quantity === undefined) && (this.props.currentDisplay !== 'quantity')) && 
              <button onClick={() => this.props.updateDisplay('quantity') } className="selection-display-future">Quantity: { this.props.currentSelections.quantity }</button> }
            { (this.props.currentDisplay === 'quantity') && 
              <button onClick={() => this.props.updateDisplay('quantity') } className="selection-display-current">Quantity: { this.props.currentSelections.quantity }</button> }

                                  {/* Softgel Size Button */}
            { (this.props.currentSelections.quantity && (this.props.currentDisplay !== 'softgelSize')) && 
              <button onClick={() => this.props.updateDisplay('softgelSize') } className="selection-display-completed">Softgel Size: { this.props.currentSelections.quantity } </button> }
            { ((this.props.currentSelections.quantity === undefined) && (this.props.currentDisplay !== 'softgelSize')) && 
              <button onClick={() => this.props.updateDisplay('softgelSize') } className="selection-display-future">Softgel Size: { this.props.currentSelections.quantity }</button> }
            { (this.props.currentDisplay === 'softgelSize') && 
              <button onClick={() => this.props.updateDisplay('softgelSize') } className="selection-display-current">Softgel Size: { this.props.currentSelections.quantity }</button> }

                                    {/* Carrier Button */}
            { (this.props.currentSelections.carrier && (this.props.currentDisplay !== 'carrier')) && 
              <button onClick={() => this.props.updateDisplay('carrier') } className="selection-display-completed">Carrier Oil: { this.props.currentSelections.carrier } </button> }
            { ((this.props.currentSelections.carrier === undefined) && (this.props.currentDisplay !== 'carrier')) && 
              <button onClick={() => this.props.updateDisplay('carrier') } className="selection-display-future">Carrier Oil: { this.props.currentSelections.carrier }</button> }
            { (this.props.currentDisplay === 'carrier') && 
              <button onClick={() => this.props.updateDisplay('carrier') } className="selection-display-current">Carrier Oil: { this.props.currentSelections.carrier }</button> }

                                    {/* Spectrum Button */}
            { (this.props.currentSelections.spectrum && (this.props.currentDisplay !== 'spectrum')) && 
              <button onClick={() => this.props.updateDisplay('spectrum') } className="selection-display-completed">Spectrum: { this.props.currentSelections.spectrum } </button> }
            { ((this.props.currentSelections.spectrum === undefined) && (this.props.currentDisplay !== 'spectrum')) && 
              <button onClick={() => this.props.updateDisplay('spectrum') } className="selection-display-future">Spectrum: { this.props.currentSelections.spectrum }</button> }
            { (this.props.currentDisplay === 'spectrum') && 
              <button onClick={() => this.props.updateDisplay('spectrum') } className="selection-display-current">Spectrum: { this.props.currentSelections.spectrum }</button> }

                                    {/* Potency Button */}
            { (this.props.currentSelections.potency && (this.props.currentDisplay !== 'potency')) && 
              <button onClick={() => this.props.updateDisplay('potency') } className="selection-display-completed">Potency: { this.props.currentSelections.potency } </button> }
            { ((this.props.currentSelections.potency === undefined) && (this.props.currentDisplay !== 'potency')) && 
              <button onClick={() => this.props.updateDisplay('potency') } className="selection-display-future">Potency: { this.props.currentSelections.potency }</button> }
            { (this.props.currentDisplay === 'potency') && 
              <button onClick={() => this.props.updateDisplay('potency') } className="selection-display-current">Potency: { this.props.currentSelections.potency }</button> }

                                  {/* Softgels per Bottle Button */}
            { (this.props.currentSelections.softgelPerBottle && (this.props.currentDisplay !== 'softgelPerBottle')) && 
              <button onClick={() => this.props.updateDisplay('softgelPerBottle') } className="selection-display-completed">Softgels per Bottle: { this.props.currentSelections.softgelPerBottle } </button> }
            { ((this.props.currentSelections.softgelPerBottle === undefined) && (this.props.currentDisplay !== 'softgelPerBottle')) && 
              <button onClick={() => this.props.updateDisplay('softgelPerBottle') } className="selection-display-future">Softgels per Bottle: { this.props.currentSelections.softgelPerBottle }</button> }
            { (this.props.currentDisplay === 'softgelPerBottle') && 
              <button onClick={() => this.props.updateDisplay('softgelPerBottle') } className="selection-display-current">Softgels per Bottle: { this.props.currentSelections.softgelPerBottle }</button> }
          
                                              {/* Logo Button */}
            { (this.props.logoChoice && (this.props.currentDisplay !== 'logo')) && 
              <button onClick={() => this.props.updateDisplay('logo') } className="selection-display-completed">Logo</button> }
            { ((this.props.logoChoice === undefined) && (this.props.currentDisplay !== 'logo')) && 
              <button onClick={() => this.props.updateDisplay('logo') } className="selection-display-future">Logo</button> }
            { (this.props.currentDisplay === 'logo') && 
              <button onClick={() => this.props.updateDisplay('logo') } className="selection-display-current">Logo</button> }            

          </article>
      case 'Topicals':
        return <article>
                                    {/* Product Button */}
            { (this.props.company.email) && 
              <button onClick={ this.props.backToCompanyInfo } className="selection-display-completed">Company Info</button> }
            {/* { ((this.props.currentSelections.quantity === undefined) && (this.props.currentDisplay !== 0)) && 
              <button onClick={ this.props.backToCompanyInfo } className="selection-display-future">Company Info</button> } */}
            { (this.props.productSelected === 'company') && 
              <button onClick={ this.props.backToCompanyInfo } className="selection-display-current">Company Info</button> }

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
          
                                    {/* Logo Button */}
            { (this.props.logoChoice && (this.props.currentDisplay !== 'logo')) && 
              <button onClick={() => this.props.updateDisplay('logo') } className="selection-display-completed">Logo</button> }
            { ((this.props.logoChoice === undefined) && (this.props.currentDisplay !== 'logo')) && 
              <button onClick={() => this.props.updateDisplay('logo') } className="selection-display-future">Logo</button> }
            { (this.props.currentDisplay === 'logo') && 
              <button onClick={() => this.props.updateDisplay('logo') } className="selection-display-current">Logo</button> }            
          
          
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
      </section>
  }

}

export default SelectionDisplay