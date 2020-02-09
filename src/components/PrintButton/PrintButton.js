import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import LabelCreator from '../LabelCreator/LabelCreator';

class PrintButton extends Component {

  render() {

    let printLabel

    if (this.props.displayPrintButton) {
      printLabel = <section>
          <ReactToPrint
            trigger={() => <button>Print this out!</button>}
            content={() => this.componentRef}
          />
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
      <section>
        { printLabel }
      </section>
    )
  }
}

export default PrintButton;