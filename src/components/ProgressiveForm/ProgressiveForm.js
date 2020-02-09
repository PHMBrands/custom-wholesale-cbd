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

  tinctureSelectionsObject = (selection) => {
    const { selectionName, selectionValue } = selection
    let updatedSelection = {...this.state.selections, [selectionName]: selectionValue }

    // let updatedChoices = this.state.choicesRemaining.map(choice => {
    //   if (choice !== selectionName) {
    //     return choice;
    //   }
    // })
    // console.log('updatedChoices', updatedChoices)


    let toDeleteIndex = this.state.choicesRemaining.indexOf(selectionName);
    let remainingChoices = this.state.choicesRemaining.splice(toDeleteIndex, 1)

    console.log('this.state.choicesRemaining', this.state.choicesRemaining)


    console.log('remainingChoices', remainingChoices)
    console.log('this.state.choicesRemaining[0]', this.state.choicesRemaining[0])



    this.setState({ selections: updatedSelection, currentDisplay: this.state.choicesRemaining[0] })



    // this.setState({ selections: selection })

    // {selectionName: "flavor", selectionValue: "Mojito"}
    
  }

  updateSelectionsObject = (selection) => {
    let updatedSelections = { ...this.state.selections, [selection.selectionName]: selection.selectionValue }
    const { flavor, carrier, spectrum, potency, logo } = updatedSelections

                    // update this if/else statement since it is now being called after setLogo

    // if (flavor && carrier && spectrum && potency && logo) {
    //   console.log('if statement')
    //   this.setState({ displayPrintButton: true })
    // } else {
    //   console.log('else statement')
    // }

            // this if/else facilitates the SelectionDisplay returning the user to the unselected option
    if (flavor && carrier && spectrum && potency && logo) {
      console.log('selections complete test')
      this.setState({ displayPrintButton: true, currentDisplay: 6 }) 
    } else if (this.state.stashedDisplay) {
      console.log('has stashed display test')

      let newDisplay = this.state.stashedDisplay
      this.setState({ selections: updatedSelections, currentDisplay: newDisplay, stashedDisplay: undefined }, () => this.displayPrintButton())
    } else {
      console.log('final else test')

      // let newDisplay = this.state.currentDisplay + 1
      // this.setState({ selections: updatedSelections, currentDisplay: newDisplay  }, () => this.displayPrintButton())
    }
  }

  displayPrintButton = () => {
    this.setState({ displayPrintButton: true })
  }

  createCompany = (company) => {
    this.setState({ company, productSelected: this.state.stashedProduct, currentDisplay: 'quantity' });
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
    this.setState({ productSelected: 'company', stashedProduct: product }, () => this.productSelectedChoicesRemaining())
  }

  productSelectedChoicesRemaining = () => {
    const tinctureChoicesRemaining = ['quantity', 'company', 'flavor', 'carrier', 'spectrum', 'potency', 'logo'];
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

    // this.setState({  })
    let updatedSelections = {...this.state.selections, logo: logo }
    console.log('updatedSelections', updatedSelections)

    this.setState({ logoChoice: logo, selections: updatedSelections})
    this.updateSelectionsObject({ selectionName: "logo", selectionValue: logo })
    
    // const { flavor, carrier, spectrum, potency, logo } = updatedSelections
    
    // if (flavor && carrier && spectrum && potency && logo) {
      //   this.setState({ logoChoice: logo, selections: updatedSelections, currentDisplay: 6, displayPrintButton: true })
      // } else {
        // }
        


    // updateSelectionObject not being called here. Need something to progress selections and setting display may not be it.
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
            selections={ this.state.selections }
            displayPrintButton={ this.state.displayPrintButton }
            tinctureSelectionsObject={ this.tinctureSelectionsObject }
            // setDisplayPrintButton={ this.setDisplayPrintButton }
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
        <PrintButton 
          productSelected={ this.state.productSelected }
          currentSelections={ this.state.selections } 
          logoChoice={ this.state.logoChoice }
          productSelected={ this.state.productSelected }
          company={ this.state.company }
          updateDisplay={ this.updateDisplay}
          currentDisplay={ this.state.currentDisplay }
          displayPrintButton={ this.state.displayPrintButton }
        />
        {/* </section> */}
        {/* <ProgressBar currentDisplay={ this.state.currentDisplay } /> */}
        {/* { startOverButton } */}
        </div>
    }
    // } else if (this.state.progress === 'button') {
    //   progressiveForm = <button onClick={ this.buildTheBrand }>BUILD MY BRAND</button>
    // } else {
    //   progressiveForm = <div>
    //     <section className="selection-area">
    //       {/* { this.selectProduct(this.state.productSelected) } */}
    //       <h3>HERE IS YOUR FINISHED PRODUCT</h3>
    //       {/* <SelectionDisplay
    //         currentSelections={ this.state.selections }
    //         updateDisplay={ this.updateDisplay}
    //       /> */}
    //     </section>
    //     <section className="created-label">
    //       <LabelCreator 
    //         currentSelections={ this.state.selections } 
    //         logoChoice={ this.state.logoChoice }
    //         productSelected={ this.state.productSelected }
    //         company={ this.state.company }
    //       />
    //     </section>
    //     {/* <ProgressBar currentDisplay={ this.state.currentDisplay } /> */}
    //     {/* { startOverButton } */}
    //     </div>
    // }

    return (
      <section className="progressive-form">


                       {/* This is the working component */}
        {/* <PrintButton 
          productSelected={ this.state.productSelected }
          currentSelections={ this.state.selections } 
          logoChoice={ this.state.logoChoice }
          productSelected={ this.state.productSelected }
          company={ this.state.company }
          updateDisplay={ this.updateDisplay}
        /> */}


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
        { resetButton }
      </section>
    );
  }
}

export default ProgressiveForm;