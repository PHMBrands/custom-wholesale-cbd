import React, { Component } from 'react';
import LogoSelector from '../LogoSelector/LogoSelector';

class TinctureChoices extends Component {
  constructor() {
    super()

    this.state = {
      selectionName: 'quantity',
      selectionValue: 100
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.tinctureSelectionsObject(this.state);
    // this.setState({ selectionName: 'not quantity' })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ selectionName: name, selectionValue: value });
  }

  handleChangeNoButton = (event) => {
    const { name, value } = event.target;
    this.setState({ selectionName: name, selectionValue: value }, () => this.handleClick(event));
  }

  // logoHandler = (logo) => {
  //   this.props.setLogoChoice(logo);
  // }

  // finalTabRender = () => {
  //   const { flavor, carrier, spectrum, potency, logo } = this.props.selections

  //   if (flavor && carrier && spectrum && potency && logo) {
  //     this.props.setDisplayPrintButton()
  //   } else {
  //     return <p>Fill out the form entirely you idiot</p>
  //   }

  // }
  //updateDisplay argument must correspond with corresponding switch statement in TinctureChoices
  
  displayChoice = (status) => {
    switch(status) {
      case 'quantity':
        return <article>
            <h4>Please select a quantity below:</h4>
            <form className="company-form">
              <input 
                type="number" 
                // placeholder="100"
                name="quantity"
                value={ this.state.selectionValue}
                onChange={ this.handleChange }
              />
              <button onClick={ this.handleClick }>SUBMIT</button>
            </form>
          </article>
      // case 1:
      //   return <article>
      //       <h4>Please select your container size:</h4>
      //       <form>
      //         <input type="radio" id="15ml" name="container" value="15mL" onChange={this.handleChangeNoButton} />
      //           <label for="15ml">15mL</label>
      //         <input type="radio" id="30ml" name="container" value="30mL" onChange={ this.handleChangeNoButton } />
      //           <label for="30ml">30mL</label>
      //       </form>
      //     </article>
      case 'flavor':
        return <article>
            <h4>Please select your flavor:</h4>
            <form>
              <input type="radio" id="guava-lime" name="flavor" value="Guava Lime" onChange={this.handleChangeNoButton} />
                <label for="guava-lime">Guava Lime</label>
              <input type="radio" id="mocha" name="flavor" value="Mocha" onChange={this.handleChangeNoButton} />
                <label for="mocha">Mocha</label>
              <input type="radio" id="mojito" name="flavor" value="Mojito" onChange={this.handleChangeNoButton} />
                <label for="mojito">Mojito</label>
              <input type="radio" id="orange-creamsicle" name="flavor" value="Orange Creamsicle" onChange={this.handleChangeNoButton} />
                <label for="orange-creamsicle">Orange Creamsicle</label>
              <input type="radio" id="peppermint" name="flavor" value="Peppermint" onChange={this.handleChangeNoButton} />
                <label for="peppermint">Peppermint</label>
              <input type="radio" id="mint-chocolate" name="flavor" value="Mint Chocolate" onChange={this.handleChangeNoButton} />
                <label for="mint-chocolate">Mint Chocolate</label>
              <input type="radio" id="unflavored" name="flavor" value="unflavored" onChange={this.handleChangeNoButton} />
                <label for="unflavored">unflavored</label>
            </form>
          </article>
      case 'carrier':
        return <article>
            <h4>Please select your carrier oil:</h4>
            <form>
              <input type="radio" id="wheat-germ-oil" name="carrier" value="Wheat Germ Oil" onChange={this.handleChangeNoButton} />
                <label for="wheat-germ-oil">Wheat Germ Oil</label>
              <input type="radio" id="mct-oil" name="carrier" value="MCT Oil" onChange={this.handleChangeNoButton} />
                <label for="mct-oil">MCT Oil</label>
            </form>
          </article>
      case 'spectrum':
        return <article>
          <h4>Please select your spectrum:</h4>
          <form>
            <input type="radio" id="full-spectrum" name="spectrum" value="Full Spectrum" onChange={this.handleChangeNoButton} />
              <label for="full-spectrum">Full Spectrum</label>
            <input type="radio" id="broad-spectrum" name="spectrum" value="Broad Spectrum" onChange={this.handleChangeNoButton} />
              <label for="broad-spectrum">Broad Spectrum</label>
          </form>
        </article>
      case 'potency':
        return <article>
            <h4>Please select your potency per serving:</h4>
            <form>
              <input type="radio" id="10mg" name="potency" value="10 mg" onChange={this.handleChangeNoButton} />
                <label for="10mg">10 mg</label>
              <input type="radio" id="20mg" name="potency" value="20 mg" onChange={this.handleChangeNoButton} />
                <label for="20mg">20 mg</label>
              <input type="radio" id="30mg" name="potency" value="30 mg" onChange={this.handleChangeNoButton} />
                <label for="30mg">30 mg</label>
              <input type="radio" id="50mg" name="potency" value="50 mg" onChange={this.handleChangeNoButton} />
                <label for="50mg">50 mg</label>
            </form>
          </article>
      case 'logo':
        return <article>
          <LogoSelector 
            setLogoChoice={ this.props.setLogoChoice }
          />
        </article>
      case 6:
        return <p>Verbiage here about creating brand (TinctureChoices switch statement case 6)</p>
      default:
        return <div>Something went wrong with the displayChoice switch statement in TinctureChoices component</div>  
    }
  }

  render () { 
    let backButton

    if (this.state.selectionName !== 'quantity') {
      backButton = <button onClick={ this.props.regressDisplay } className="back-button">Previous Option</button>
    } else {
      backButton = <button onClick={ this.props.backToCompanyInfo } className="back-button">BACK</button>
    }

    return (
      <section className="tincture-choices">
        { backButton }
        {/* <h3>Private Label Tinctures</h3> */}
        { this.displayChoice(this.props.currentDisplay) }
      </section>
    );
  }
}

export default TinctureChoices;