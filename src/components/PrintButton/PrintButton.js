import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import LabelCreator from '../LabelCreator/LabelCreator';
import TestPrintComponent from '../TestPrintComponent/TestPrintComponent';

class PrintButton extends Component {

  render() {
    return(
      <div>
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
          // currentSelections={ this.state.selections } 
          // logoChoice={ this.state.logoChoice }
          // productSelected={ this.state.productSelected }
          // company={ this.state.company }
          // updateDisplay={ this.updateDisplay} 
        />
      </div>
    )
  }
}

export default PrintButton;