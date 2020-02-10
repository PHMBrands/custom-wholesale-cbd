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
    this.props.updateSelectionsObject(this.state);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ selectionName: name, selectionValue: value });
  }

  handleChangeNoButton = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(event.target)
    console.log('name', name)
    console.log('value', value)
    this.setState({ selectionName: name, selectionValue: value }, () => this.props.updateSelectionsObject(this.state));
  }

  //updateDisplay argument must correspond with corresponding switch statement in TinctureChoices
  
  displayChoice = (status) => {
    switch(status) {
      case 'quantity':
        return <article>
            <h4>Please select a quantity below:</h4>
            <form className="company-form">
              <input 
                type="number" 
                name="quantity"
                value={ this.state.selectionValue}
                onChange={ this.handleChange }
              />
              <button onClick={ this.handleClick }>SUBMIT</button>
            </form>
          </article>
      // case 'container':
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
                <label htmlFor="guava-lime">Guava Lime</label>
              <input type="radio" id="mocha" name="flavor" value="Mocha" onChange={this.handleChangeNoButton} />
                <label htmlFor="mocha">Mocha</label>
              <input type="radio" id="mojito" name="flavor" value="Mojito" onChange={this.handleChangeNoButton} />
                <label htmlFor="mojito">Mojito</label>
              <input type="radio" id="orange-creamsicle" name="flavor" value="Orange Creamsicle" onChange={this.handleChangeNoButton} />
                <label htmlFor="orange-creamsicle">Orange Creamsicle</label>
              <input type="radio" id="peppermint" name="flavor" value="Peppermint" onChange={this.handleChangeNoButton} />
                <label htmlFor="peppermint">Peppermint</label>
              <input type="radio" id="mint-chocolate" name="flavor" value="Mint Chocolate" onChange={this.handleChangeNoButton} />
                <label htmlFor="mint-chocolate">Mint Chocolate</label>
              <input type="radio" id="unflavored" name="flavor" value="unflavored" onChange={this.handleChangeNoButton} />
                <label htmlFor="unflavored">unflavored</label>
            </form>
          </article>
      case 'carrier':
        return <article>
            <h4>Please select your carrier oil:</h4>
            <form>
              <input type="radio" id="wheat-germ-oil" name="carrier" value="Wheat Germ Oil" onChange={this.handleChangeNoButton} />
                <label htmlFor="wheat-germ-oil">Wheat Germ Oil</label>
              <input type="radio" id="mct-oil" name="carrier" value="MCT Oil" onChange={this.handleChangeNoButton} />
                <label htmlFor="mct-oil">MCT Oil</label>
            </form>
          </article>
      case 'spectrum':
        return <article>
          <h4>Please select your spectrum:</h4>
          <form>
            <button name="spectrum" value="Full Spectrum" onClick={ this.handleChangeNoButton }>Full Spectrum</button>
            <button name="spectrum" value="Broad Spectrum" onClick={ this.handleChangeNoButton }>Broad Spectrum</button>


            {/* <input type="radio" id="full-spectrum" name="spectrum" value="Full Spectrum" onChange={this.handleChangeNoButton} />
              <label htmlFor="full-spectrum">Full Spectrum</label>
            <input type="radio" id="broad-spectrum" name="spectrum" value="Broad Spectrum" onChange={this.handleChangeNoButton} />
              <label htmlFor="broad-spectrum">Broad Spectrum</label> */}
          </form>
        </article>
      case 'potency':
        return <article className="potency-choices">
            <h4>Please select your potency per serving:</h4>
            <form>
              <button name="potency" value="10 mg" onClick={ this.handleChangeNoButton }>
                <p><span className="potency-big-number">10</span>mg</p>
                <p className="potency-per-bottle">300mg per bottle</p>
              </button>
              <button name="potency" value="20 mg" onClick={ this.handleChangeNoButton }>
                <p><span name="potency" value="20 mg" className="potency-big-number">20</span>mg</p>
                <p className="potency-per-bottle">600mg per bottle</p>
              </button>
              <button name="potency" value="30 mg" onClick={ this.handleChangeNoButton }>
                <p><span className="potency-big-number">30</span>mg</p>
                <p className="potency-per-bottle">900mg per bottle</p>
              </button>
              <button name="potency" value="50 mg" onClick={ this.handleChangeNoButton }>
                <p><span className="potency-big-number">50</span>mg</p>
                <p className="potency-per-bottle">1500mg per bottle</p>
              </button>
            </form>

            {/* <form>
              <input type="radio" id="10mg" name="potency" value="10 mg" onChange={this.handleChangeNoButton} />
                <label htmlFor="10mg">
                  <p><span className="mg-per-serving">10</span>mg</p>
                  <p><span className="mg-per-bottle">300mg per bottle</span></p>
                </label>
              <input type="radio" id="20mg" name="potency" value="20 mg" onChange={this.handleChangeNoButton} />
                <label htmlFor="20mg">20 mg</label>
              <input type="radio" id="30mg" name="potency" value="30 mg" onChange={this.handleChangeNoButton} />
                <label htmlFor="30mg">30 mg</label>
              <input type="radio" id="50mg" name="potency" value="50 mg" onChange={this.handleChangeNoButton} />
                <label htmlFor="50mg">50 mg</label>
            </form> */}
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
        { this.displayChoice(this.props.currentDisplay) }
      </section>
    );
  }
}

export default TinctureChoices;