import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import LabelCreator from '../LabelCreator/LabelCreator';

class PrintButton extends Component {

  render() {

    let printLabel

    if (this.props.currentDisplay === 6) {
      printLabel = <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
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
          </div>
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
      <div>
        { printLabel }
      </div>
    )
  }
}

export default PrintButton;