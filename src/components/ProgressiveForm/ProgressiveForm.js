import React, { Component } from 'react';
import TinctureChoices from '../TinctureChoices/TinctureChoices';
import SelectionDisplay from '../SelectionDisplay/SelectionDisplay';
import SoftgelChoices from '../SoftgelChoices/SoftgelChoices';  
import TopicalsChoices from '../TopicalsChoices/TopicalsChoices';
// import LabelCreator from '../LabelCreator/LabelCreator';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import TinctureChoice from '../../images/form-options/tincture-icon.jpg';
import SoftgelChoice from '../../images/form-options/softgel-icon.jpg'
import TopicalChoice from '../../images/form-options/topical-icon.jpg';
import PrintButton from '../PrintButton/PrintButton';



class ProgressiveForm extends Component {
  constructor() {
    super()

    this.state = {
      selections: {},
      pricing: {},
      currentDisplay: 'company',
      stashedDisplay: undefined,
      productSelected: 'products',
      logoChoice: undefined,
      company: { companyEntered: false },
      stashedProduct: '',
      progress: 'open',
      displayPrintButton: false,
      choicesRemaining: []
    }
  }

  updateSelectionsObject = (selection) => {
    const { selectionName, selectionValue } = selection
    let updatedSelection = {...this.state.selections, [selectionName]: selectionValue }
    let updatedChoicesRemaining = this.state.choicesRemaining.filter(choice => choice !== selectionName)

    if (updatedChoicesRemaining.length > 0) {
      this.setState({ selections: updatedSelection, choicesRemaining: updatedChoicesRemaining, currentDisplay: updatedChoicesRemaining[0] })
    } else {
      this.setState({ currentDisplay: 6, displayPrintButton: true })
    }
  }

  displayPrintButton = () => {
    this.setState({ displayPrintButton: true })
  }

  createCompany = (company) => {
    this.setState({ company, productSelected: this.state.stashedProduct, currentDisplay: 'quantity' });
  }

  updateDisplay = (display) => {
    let stashedDisplay = this.state.currentDisplay;
    this.setState({ currentDisplay: display, stashedDisplay })
  }

  regressDisplay = () => {
    let newDisplay = this.state.currentDisplay - 1;
    this.setState({ currentDisplay: newDisplay })
  }

  updateProductSelection = (product) => {
    this.setState({ productSelected: 'company', stashedProduct: product }, () => this.productSelectedChoicesRemaining())
  }

  productSelectedChoicesRemaining = () => {
    const tinctureChoicesRemaining = ['quantity', 'flavor', 'carrier', 'spectrum', 'potency', 'logo'];
    const softgelChoicesRemaining = [];
    const topicalsChoicesRemaining = [];

    if (this.state.stashedProduct === 'Tinctures') {
      this.setState({ choicesRemaining: tinctureChoicesRemaining })
    } else if (this.state.stashedProduct === 'Softgels') {
      this.setState({ choicesRemaining: softgelChoicesRemaining }) 
    } else if (this.state.stashedProduct === 'Topicals') {
      this.setState({ choicesRemaining: topicalsChoicesRemaining })
    }
  }

  setLogoChoice = (logo) => {
    // let updatedSelections = {...this.state.selections, logo: logo }
    let logoChoice = {selectionName: "logo", selectionValue: logo}

    this.setState({ logoChoice: logo })
    this.updateSelectionsObject(logoChoice)
  }

  startOver = () => {
    this.setState({ selections: {}, currentDisplay: 0, productSelected: 'products', logoChoice: undefined })
  }

  backToCompanyInfo = () => {
    this.setState({ productSelected: 'company' })
  }

  setDisplayPrintButton = () => {
    this.setState({ displayPrintButton: true })
  }

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
            <p>To get started click below:</p>
            <form>
              <button onClick={ () => this.updateProductSelection('Tinctures') } className="product-button" ><img src={ TinctureChoice } alt="generic tincture" className="product-choice-image" />Tinctures</button>
              {/* <button onClick={ () => this.updateProductSelection('Softgels') } className="product-button" ><img src={ SoftgelChoice } alt="generic softgel" className="product-choice-image" />Softgels</button> */}
              {/* <button onClick={ () => this.updateProductSelection('Topicals') } className="product-button" ><img src={ TopicalChoice } alt="generic topical" className="product-choice-image" />Lotions</button> */}
            </form>
          </section>
      case 'Tinctures':
        return <TinctureChoices 
            currentDisplay={ this.state.currentDisplay } 
            updateSelectionsObject={ this.updateSelectionsObject }
            setLogoChoice={ this.setLogoChoice }
            regressDisplay={ this.regressDisplay }
            selections={ this.state.selections }
            startOver={ this.startOver }
          />
      case 'Softgels':
        return <SoftgelChoices
            currentDisplay={this.state.currentDisplay}
            updateSelectionsObject={this.updateSelectionsObject}
            setLogoChoice={ this.setLogoChoice }
            regressDisplay={ this.regressDisplay }
            backToCompanyInfo={ this.backToCompanyInfo }
            startOver={ this.startOver }
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
    // let progressiveForm
    let productHeader

    if (this.state.productSelected !== 'products') {
      resetButton = <button onClick={ this.startOver } className="reset-button">RESET</button>
    }

    if(this.state.productSelected !== 'products' && this.state.productSelected !== 'company') {
      productHeader = <h2>Private Label {this.state.productSelected}</h2>
    }

    // if (this.state.progress === 'open') {
    //   progressiveForm = <div>
    //     <section className="selection-area">
    //         { productHeader }
    //         <SelectionDisplay
    //           currentSelections={ this.state.selections }
    //           updateDisplay={ this.updateDisplay}
    //           productSelected={ this.state.productSelected }
    //           currentDisplay={ this.state.currentDisplay }
    //           company={ this.state.company }
    //           backToCompanyInfo={ this.backToCompanyInfo }
    //           logoChoice={ this.state.logoChoice }
    //           />
    //         { this.selectProduct(this.state.productSelected) }
    //       </section>
    //       <PrintButton 
    //         productSelected={ this.state.productSelected }
    //         currentSelections={ this.state.selections } 
    //         logoChoice={ this.state.logoChoice }
    //         productSelected={ this.state.productSelected }
    //         company={ this.state.company }
    //         updateDisplay={ this.updateDisplay}
    //         currentDisplay={ this.state.currentDisplay }
    //         displayPrintButton={ this.state.displayPrintButton }
    //         />
    //     </div>
    // }

    return (
      <section className="progressive-form">
        {/* { progressiveForm } */}
        <div>
        <section className="selection-area">
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
          </section>
          <PrintButton 
            productSelected={ this.state.productSelected }
            currentSelections={ this.state.selections } 
            logoChoice={ this.state.logoChoice }
            company={ this.state.company }
            updateDisplay={ this.updateDisplay}
            currentDisplay={ this.state.currentDisplay }
            displayPrintButton={ this.state.displayPrintButton }
            />
        </div>
        {/* { resetButton } */}
      </section>
    );
  }
}

export default ProgressiveForm;