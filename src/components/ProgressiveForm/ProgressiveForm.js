import React, { Component } from 'react';
import TinctureChoices from '../TinctureChoices/TinctureChoices';
import SelectionDisplay from '../SelectionDisplay/SelectionDisplay';
import ProgressBar from '../ProgressBar/ProgressBar';
import SoftgelChoices from '../SoftgelChoices/SoftgelChoices';  
import TopicalsChoices from '../TopicalsChoices/TopicalsChoices';
import LabelCreator from '../LabelCreator/LabelCreator';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import TinctureChoice from '../../images/form-options/tincture-icon.jpg';
import SoftgelChoice from '../../images/form-options/softgel-icon.jpg'
import TopicalChoice from '../../images/form-options/topical-icon.jpg';
import PrintButton from '../PrintButton/PrintButton';
import TestPrintComponent from '../TestPrintComponent/TestPrintComponent';
import ReactToPrint from 'react-to-print';



class ProgressiveForm extends Component {
  constructor() {
    super()

    this.state = {
      selections: {},
      pricing: {},
      currentDisplay: 0,
      stashedDisplay: undefined,
      productSelected: 'products',
      logoChoice: undefined,
      company: { companyEntered: false },
      stashedProduct: '',
      progress: 'open'
    }
  }

  updateSelectionsObject = (selection) => {
    let updatedSelections = { ...this.state.selections, [selection.selectionName]: selection.selectionValue }
    
    if (this.state.stashedDisplay) {
      let newDisplay = this.state.stashedDisplay
      this.setState({ selections: updatedSelections, currentDisplay: newDisplay, stashedDisplay: undefined })
    } else {
      let newDisplay = this.state.currentDisplay + 1
      this.setState({ selections: updatedSelections, currentDisplay: newDisplay  })
    }
  }

  createCompany = (company) => {
    this.setState({ company, productSelected: this.state.stashedProduct });
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

  updateProductSelection = (product) => {
    this.setState({ productSelected: 'company', stashedProduct: product })
  }

  setLogoChoice = (logo) => {
    console.log('setlogochoice test')
    let company = {...this.state.company, logo }
    this.setState({ logoChoice: logo, company, currentDisplay: 6 })
  }

  startOver = () => {
    this.setState({ selections: {}, currentDisplay: 0, productSelected: 'products', logoChoice: undefined })
  }

  backToCompanyInfo = () => {
    this.setState({ productSelected: 'company' })
  }

  // buildTheBrand = () => {
  //   this.setState({ progress: 'close' })
  //   console.log('test')
  // }

  selectProduct = (selection) => {
    switch (selection) {
      case 'company':
        return <section>
            <button onClick={ this.startOver } className="back-button">BACK</button>
            <p>Your company name will appear on the label, and the contact info below that.</p>
            <p>Enter your information below</p>
            <CompanyInfo 
              createCompany={ this.createCompany } 
              company={ this.state.company }
            />
          </section> 
      case 'products':
        return <section className="intro-page">
            <h2>Create your own private label CBD products in less than three minutes</h2>
            <p>To get started select a product below:</p>
            <form>
              <button onClick={ () => this.updateProductSelection('Tinctures') } className="product-button" ><img src={ TinctureChoice } className="product-choice-image" />Tinctures</button>
              <button onClick={ () => this.updateProductSelection('Softgels') } className="product-button" ><img src={ SoftgelChoice } className="product-choice-image" />Softgels</button>
              <button onClick={ () => this.updateProductSelection('Topicals') } className="product-button" ><img src={ TopicalChoice } className="product-choice-image" />Lotions</button>
            </form>
          </section>
      case 'Tinctures':
        return <TinctureChoices 
            currentDisplay={ this.state.currentDisplay } 
            updateSelectionsObject={ this.updateSelectionsObject }
            setLogoChoice={ this.setLogoChoice }
            regressDisplay={ this.regressDisplay }
          />
      case 'Softgels':
        return <SoftgelChoices
            currentDisplay={this.state.currentDisplay}
            updateSelectionsObject={this.updateSelectionsObject}
            setLogoChoice={ this.setLogoChoice }
            regressDisplay={ this.regressDisplay }
            backToCompanyInfo={ this.backToCompanyInfo }
          />
      case 'Topicals':
        return <TopicalsChoices
            currentDisplay={ this.state.currentDisplay }
            updateSelectionsObject={ this.updateSelectionsObject }
            setLogoChoice={ this.setLogoChoice }
            regressDisplay={ this.regressDisplay }
            backToCompanyInfo={ this.backToCompanyInfo }
          />
      default:
        return <p>Something went wrong with the selectProduct switch statement.</p>
    }
  }

  render() {
    let resetButton
    let progressiveForm
    let productHeader

    if (this.state.productSelected !== 'products') {
      resetButton = <button onClick={ this.startOver } className="reset-button">RESET</button>
    }

    if(this.state.productSelected !== 'products' && this.state.productSelected !== 'company') {
      productHeader = <h2>Private Label {this.state.productSelected}</h2>
    }

    if (this.state.progress === 'open') {
      progressiveForm = <div>
        
        <section className="selection-area">
          {/* <h2>Private Label {this.state.productSelected}</h2> */}
          { productHeader }
          <SelectionDisplay
            currentSelections={ this.state.selections }
            updateDisplay={ this.updateDisplay}
            productSelected={ this.state.productSelected }
            currentDisplay={ this.state.currentDisplay }
            company={ this.state.company }
            backToCompanyInfo={ this.backToCompanyInfo }
            logoChoice={ this.state.logoChoice }
          />
          { this.selectProduct(this.state.productSelected) }
          {/* <SelectionDisplay
            currentSelections={ this.state.selections }
            updateDisplay={ this.updateDisplay}
          /> */}
        </section>
        {/* <section className="created-label"> */}
          <LabelCreator 
            currentSelections={ this.state.selections } 
            logoChoice={ this.state.logoChoice }
            productSelected={ this.state.productSelected }
            company={ this.state.company }
            updateDisplay={ this.updateDisplay}
          />
        {/* </section> */}
        {/* <ProgressBar currentDisplay={ this.state.currentDisplay } /> */}
        {/* { startOverButton } */}
        </div>
    // } else if (this.state.progress === 'button') {
    //   progressiveForm = <button onClick={ this.buildTheBrand }>BUILD MY BRAND</button>
    } else {
      progressiveForm = <div>
        <section className="selection-area">
          {/* { this.selectProduct(this.state.productSelected) } */}
          <h3>HERE IS YOUR FINISHED PRODUCT</h3>
          {/* <SelectionDisplay
            currentSelections={ this.state.selections }
            updateDisplay={ this.updateDisplay}
          /> */}
        </section>
        <section className="created-label">
          <LabelCreator 
            currentSelections={ this.state.selections } 
            logoChoice={ this.state.logoChoice }
            productSelected={ this.state.productSelected }
            company={ this.state.company }
          />
        </section>
        {/* <ProgressBar currentDisplay={ this.state.currentDisplay } /> */}
        {/* { startOverButton } */}
        </div>
    }

    return (
      <section className="progressive-form">
        {/* <TestPrintComponent /> */}
        {/* <PrintButton 
          productSelected={ this.state.productSelected }
          currentSelections={ this.state.selections } 
          logoChoice={ this.state.logoChoice }
          productSelected={ this.state.productSelected }
          company={ this.state.company }
          updateDisplay={ this.updateDisplay}
        /> */}
        {/* <TestComponent /> */}
        { progressiveForm }
        {/* <section className="selection-area">
          { this.selectProduct(this.state.productSelected) }
          <SelectionDisplay
            currentSelections={ this.state.selections }
            updateDisplay={ this.updateDisplay}
          />
        </section>
        <section className="created-label">
          <LabelCreator 
            currentSelections={ this.state.selections } 
            logoChoice={ this.state.logoChoice }
            productSelected={ this.state.productSelected }
            company={ this.state.company }
          />
        </section>
        <ProgressBar currentDisplay={ this.state.currentDisplay } />
        { startOverButton } */}
        {/* <PrintButton /> */}
        { resetButton }
      </section>
    );
  }
}

export default ProgressiveForm;

// class PrintButton extends Component {

//   render() {
//     return(
//       <div>
//         <ReactToPrint
//           trigger={() => <a href="#">Print this out!</a>}
//           content={() => this.componentRef}
//         />
//         <LabelCreator 
//           ref={el => (this.componentRef = el)}
//           currentSelections={ this.state.selections } 
//           logoChoice={ this.state.logoChoice }
//           productSelected={ this.state.productSelected }
//           company={ this.state.company }
//           updateDisplay={ this.updateDisplay} 
//         />
//       </div>
//     )
//   }
// }