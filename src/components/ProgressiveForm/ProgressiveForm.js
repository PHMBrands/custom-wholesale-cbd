import React, { Component } from 'react';
import TinctureChoices from '../TinctureChoices/TinctureChoices';
import SelectionDisplay from '../SelectionDisplay/SelectionDisplay';
import SoftgelChoices from '../SoftgelChoices/SoftgelChoices';  
import TopicalsChoices from '../TopicalsChoices/TopicalsChoices';
// import LabelCreator from '../LabelCreator/LabelCreator';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import TinctureChoice from '../../images/form-options/tincture-optimized.jpg';
import SoftgelChoice from '../../images/form-options/softgels-optimized.jpg'
import TopicalChoice from '../../images/form-options/lotion-optimized.jpg';
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
      choices: [],
      choicesRemaining: []
    }
  }

  updateSelectionsObject = (selection) => {
    const { selectionName, selectionValue } = selection;
    let updatedSelection = {...this.state.selections, [selectionName]: selectionValue };
    this.setState({ selections: updatedSelection });
    this.progressDisplay()

    //This logic is for site version (prevents user from continuing without completing all options)
    // let updatedChoicesRemaining = this.state.choicesRemaining.filter(choice => choice !== selectionName);

    // if (updatedChoicesRemaining.length > 0) {
    //   this.setState({ selections: updatedSelection, choicesRemaining: updatedChoicesRemaining, currentDisplay: updatedChoicesRemaining[0] })
    // } else {
    //   this.setState({ currentDisplay: 6, displayPrintButton: true })
    // }
  }

  displayPrintButton = () => {
    this.setState({ displayPrintButton: true });
  }

  createCompany = (company) => {
    this.setState({ company, productSelected: this.state.stashedProduct, currentDisplay: 'quantity' });
  }

  updateDisplay = (display) => {
    let stashedDisplay = this.state.currentDisplay;
    this.setState({ currentDisplay: display, stashedDisplay });
  }

  progressDisplay = () => {
    let testNum = this.state.choices.indexOf(this.state.currentDisplay) + 1

    if (testNum !== this.state.choices.length) {
      this.setState({ currentDisplay: this.state.choices[testNum] }, () => this.checkPrintButton())
    }
  }

  regressDisplay = () => {
    let testNum = this.state.choices.indexOf(this.state.currentDisplay) - 1

    if (testNum > 0) {
      this.setState({ currentDisplay: this.state.choices[testNum], displayPrintButton: false })
    } else if (testNum === 0) {
      this.setState({ productSelected: 'company' })
    }
  }

  checkPrintButton = () => {
    if (this.state.currentDisplay === 'logo') {
      this.setState({ displayPrintButton: true });
    }
  }

  updateProductSelection = (product) => {
    this.setState({ productSelected: 'company', stashedProduct: product }, () => this.productSelectedChoicesRemaining())
  }

  productSelectedChoicesRemaining = () => {
    const tinctureChoicesRemaining = ['quantity', 'flavor', 'carrier', 'spectrum', 'potency', 'logo'];
    const softgelChoicesRemaining = ['quantity', 'softgelSize', 'potency', 'carrier', 'spectrum', 'softgelPerBottle', 'logo'];
    const topicalsChoicesRemaining = ['quantity', 'spectrum', 'scent', 'potency', 'logo'];
    const tincturesComplete = ['company', 'quantity', 'flavor', 'carrier', 'spectrum', 'potency', 'logo']  
    const softgelComplete = ['company', 'quantity', 'softgelSize', 'potency', 'carrier', 'spectrum', 'softgelPerBottle', 'logo']
    const topicalsComplete = ['company', 'quantity', 'spectrum', 'scent', 'potency', 'logo']

    if (this.state.stashedProduct === 'Tinctures') {
      this.setState({ choices: tincturesComplete, choicesRemaining: tinctureChoicesRemaining})
    } else if (this.state.stashedProduct === 'Softgels') {
      this.setState({ choices: softgelComplete, choicesRemaining: softgelChoicesRemaining }) 
    } else if (this.state.stashedProduct === 'Topicals') {
      this.setState({ choices: topicalsComplete,choicesRemaining: topicalsChoicesRemaining })
    }
  }

  setLogoChoice = (logo) => {
    // let updatedSelections = {...this.state.selections, logo: logo }
    let logoChoice = {selectionName: "logo", selectionValue: logo}

    this.setState({ logoChoice: logo })
    this.updateSelectionsObject(logoChoice)
  }

  // startOver = () => {
  //   this.setState({ selections: {}, currentDisplay: 0, productSelected: 'products', logoChoice: undefined, displayPrintButton: false })
  // }

  backToCompanyInfo = () => {
    this.setState({ productSelected: 'company' })
  }

  backToProductSelection = () => {
    this.setState({ productSelected: 'products' })
  }

  // setDisplayPrintButton = () => {
  //   this.setState({ displayPrintButton: true })
  // }

  selectProduct = (selection) => {
    switch (selection) {
      case 'company':
        return <section>
            {/* <button onClick={ this.startOver } className="back-button">BACK</button> */}
            <p className="step-explanation" id="company-step-descriptor"><span className="step-number">Step 2: </span>Enter your information</p>
            <CompanyInfo 
              createCompany={ this.createCompany } 
              company={ this.state.company }
              backToProductSelection={ this.backToProductSelection }
            />
          </section> 
      case 'products':
        return <section className="intro-page">
            <h1>Private label</h1>
            <h2>& White label made easy!</h2>
            <p className="intro-graph">Are you looking for CBD products with your label on it? No problem! You can choose which of our preformulated products you want and order it right here. If you want to talk to a sales representative you can.... or you can simply use our CBD stock products builder and pay online today. NO BULL! Do it all online! Transpartent pricing and easy to use.</p>
            <p className="step-explanation"><span className="step-number">STEP 1: </span>Choose your product</p>
            {/* <p>To get started click below:</p> */}
            <form>
              <button onClick={ () => this.updateProductSelection('Softgels') } className="product-button" ><img src={ SoftgelChoice } alt="generic softgel" className="product-choice-image" />Softgels</button>
              <button onClick={ () => this.updateProductSelection('Topicals') } className="product-button" ><img src={ TopicalChoice } alt="generic topical" className="product-choice-image" />Lotion</button>
              <button onClick={ () => this.updateProductSelection('Tinctures') } className="product-button" ><img src={ TinctureChoice } alt="generic tincture" className="product-choice-image" />Tinctures</button>
            </form>
          </section>
      case 'Tinctures':
        return <TinctureChoices 
            currentDisplay={ this.state.currentDisplay } 
            updateSelectionsObject={ this.updateSelectionsObject }
            setLogoChoice={ this.setLogoChoice }
            progressDisplay={ this.progressDisplay }
            regressDisplay={ this.regressDisplay }
            selections={ this.state.selections }
            // startOver={ this.startOver }
          />
      case 'Softgels':
        return <SoftgelChoices
            currentDisplay={this.state.currentDisplay}
            updateSelectionsObject={this.updateSelectionsObject}
            setLogoChoice={ this.setLogoChoice }
            progressDisplay={ this.progressDisplay }
            regressDisplay={ this.regressDisplay }
            selections={ this.state.selections }
            // startOver={ this.startOver }
          />
      case 'Topicals':
        return <TopicalsChoices
            currentDisplay={ this.state.currentDisplay }
            updateSelectionsObject={ this.updateSelectionsObject }
            setLogoChoice={ this.setLogoChoice }
            progressDisplay={ this.progressDisplay }
            regressDisplay={ this.regressDisplay }
            selections={ this.state.selections }
            // startOver={ this.startOver }
          />
      default:
        return <p>Something went wrong with the selectProduct switch statement.</p>
    }
  }

  render() {
    // let resetButton
    // let progressiveForm
    // let productHeader

    // if (this.state.productSelected !== 'products') {
    //   resetButton = <button onClick={ this.startOver } className="reset-button">RESET</button>
    // }

    // if(this.state.productSelected !== 'products' && this.state.productSelected !== 'company') {
    //   productHeader = <h2>Private Label {this.state.productSelected}</h2>
    // }

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
            {/* { productHeader } */}
            {/* <SelectionDisplay
              currentSelections={ this.state.selections }
              updateDisplay={ this.updateDisplay}
              productSelected={ this.state.productSelected }
              currentDisplay={ this.state.currentDisplay }
              company={ this.state.company }
              backToCompanyInfo={ this.backToCompanyInfo }
              logoChoice={ this.state.logoChoice }
              /> */}
            { this.selectProduct(this.state.productSelected) }
            {/* <button onClick={ this.testMethod }>CLICK TO START</button> */}
            {/* this.updateProductSelection('Tinctures') */}
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