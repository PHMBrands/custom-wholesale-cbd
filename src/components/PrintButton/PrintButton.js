import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import LabelCreator from '../LabelCreator/LabelCreator';

class PrintButton extends Component {

  render() {

    let printLabel

    if (this.props.displayPrintButton) {
      printLabel = <section>
          <article>
              <ReactToPrint
                trigger={() => <button className="actual-print-button">PRINT→</button>}
                content={() => this.componentRef}
              />
          </article>
          <LabelCreator 
            ref={el => (this.componentRef = el)}
            currentSelections={ this.props.currentSelections } 
            logoChoice={ this.props.logoChoice }
            productSelected={ this.props.productSelected }
            company={ this.props.company }
            updateDisplay={ this.props.updateDisplay}
          />
          </section>
    } else {
      printLabel = <LabelCreator 
        ref={el => (this.componentRef = el)}
        currentSelections={ this.props.currentSelections } 
        logoChoice={ this.props.logoChoice }
        productSelected={ this.props.productSelected }
        company={ this.props.company }
        updateDisplay={ this.props.updateDisplay}
      />
    }

    return(
      <section className="print-button-and-label">
        { printLabel }
      </section>
    )
  }
}

export default PrintButton;