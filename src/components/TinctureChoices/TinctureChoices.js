import React, { Component } from 'react';
import LogoSelector from '../LogoSelector/LogoSelector';
import FullSpectrum from '../../images/choice-button-icons/full-spectrum.svg';
import BroadSpectrum from '../../images/choice-button-icons/no-thc.svg'
import Guava from '../../images/choice-button-icons/guava.svg';
import Mint from '../../images/choice-button-icons/mint.svg';
import Mojito from '../../images/choice-button-icons/mojito.svg';
import Peppermint from '../../images/choice-button-icons/peppermint.svg';
import Popsicle from '../../images/choice-button-icons/popsicle.svg';
// import Mocha from '../../images/choice-button-icons/mocha.svg';
import Mocha from '../../images/choice-button-icons/coffee-bean.svg';
import Hemp from '../../images/choice-button-icons/hemp.svg';
import Wheat from '../../images/choice-button-icons/wheat.svg';
import Coconut from '../../images/choice-button-icons/coconut.svg';
import TinctureChoice from '../../images/form-options/tincture-icon.jpg';


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
    this.setState({ selectionName: name, selectionValue: value }, () => this.props.updateSelectionsObject(this.state));
  }

  displayChoice = (status) => {
    switch(status) {
      case 'quantity':
        return <article>
            <h3>Step 2: Number of tinctures</h3>
            <h4>Minimum 250 Tinctures</h4>
            <form className="company-form">
              <input 
                type="number" 
                name="quantity"
                value={ this.state.selectionValue }
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
            <h2>Choose your flavor:</h2>
            <form className="tincture-flavors">
              <button name="flavor" value="Guava Lime" onClick={ this.handleChangeNoButton } >
                <img src={ Guava } className="tincture-flavor-button-icons" />
                <p>Guava Lime</p>
              </button>
              <button name="flavor" value="Mocha" onClick={ this.handleChangeNoButton } >
                <img src={ Mocha } className="tincture-flavor-button-icons" />
                <p>Mocha</p>
              </button>
              <button name="flavor" value="Mojito" onClick={ this.handleChangeNoButton } >
                <img src={ Mojito } className="tincture-flavor-button-icons" />
                <p>Mojito</p>
              </button>
              <button name="flavor" value="Orange Creamsicle" onClick={ this.handleChangeNoButton } >
                <img src={ Popsicle } className="tincture-flavor-button-icons" />
                <p>Orange Creamsicle</p>
              </button>
              <button name="flavor" value="Peppermint" onClick={ this.handleChangeNoButton } >
                <img src={ Peppermint } className="tincture-flavor-button-icons" />
                <p>Peppermint</p>
              </button>
              <button name="flavor" value="Mint Chocolate" onClick={ this.handleChangeNoButton } >
                <img src={ Mint } className="tincture-flavor-button-icons" />
                <p>Mint Chocolate</p>
              </button>
              <button name="flavor" value="Unflavored" onClick={ this.handleChangeNoButton } >
                <img src={ Hemp } className="tincture-flavor-button-icons" />
                <p>Unflavored</p>
              </button>


              {/* <input type="radio" id="guava-lime" name="flavor" value="Guava Lime" onChange={this.handleChangeNoButton} />
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
                <label htmlFor="unflavored">unflavored</label> */}
            </form>
          </article>
      case 'carrier':
        return <article className="tincture-carrier">
            <h2>Choose your carrier oil:</h2>
            <form className="tincture-carrier-oil">
              <button name="carrier" value="Wheat Germ Oil" onClick={ this.handleChangeNoButton }>
                <img src={ Wheat } className="carrier-button-logos" />
                <p>Wheat Germ Oil</p>
              </button>
              <button name="carrier" value="MCT Oil" onClick={ this.handleChangeNoButton }>
                <img src={ Coconut } className="carrier-button-logos" />
                <p>MCT Oil</p>
              </button>

              {/* <input type="radio" id="wheat-germ-oil" name="carrier" value="Wheat Germ Oil" onChange={this.handleChangeNoButton} />
                <label htmlFor="wheat-germ-oil">Wheat Germ Oil</label>
              <input type="radio" id="mct-oil" name="carrier" value="MCT Oil" onChange={this.handleChangeNoButton} />
                <label htmlFor="mct-oil">MCT Oil</label> */}
            </form>
          </article>
      case 'spectrum':
        return <article>
          <h2>Choose your spectrum:</h2>
          <form className="tincture-spectrum">
            <button name="spectrum" value="Full Spectrum" onClick={ this.handleChangeNoButton }>
              <img src={ FullSpectrum } className="spectrum-button-logos" />
              <p>Full Spectrum</p>
            </button>
            <button name="spectrum" value="Broad Spectrum" onClick={ this.handleChangeNoButton }>
              <img src={ BroadSpectrum } className="spectrum-button-logos" />
              <p>Broad Spectrum</p>
            </button>


            {/* <input type="radio" id="full-spectrum" name="spectrum" value="Full Spectrum" onChange={this.handleChangeNoButton} />
              <label htmlFor="full-spectrum">Full Spectrum</label>
            <input type="radio" id="broad-spectrum" name="spectrum" value="Broad Spectrum" onChange={this.handleChangeNoButton} />
              <label htmlFor="broad-spectrum">Broad Spectrum</label> */}
          </form>
        </article>
      case 'potency':
        return <article className="tincture-potency">
            <h2>Choose your potency per serving:</h2>
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
        return <article className="tincture-congratulation-screen">
          <h2>Congratulations!</h2>
          <p>You've just created your brand.</p>
          </article>
      default:
        return <div>Something went wrong with the displayChoice switch statement in TinctureChoices component</div>  
    }
  }

  render () { 
    // let backButton

    // if (this.state.selectionName !== 'quantity') {
    //   backButton = <button onClick={ this.props.regressDisplay } className="back-button">Previous Option</button>
    // } else {
    //   backButton = <button onClick={ this.props.backToCompanyInfo } className="back-button">BACK</button>
    // }

    return (
      <section className="tincture-choices">
        <section className="product-photo-and-choices">
          <section>
            <img src={ TinctureChoice } className="product-choice-image" />
            <p>30ML amber glass bottle with dropper</p>
          </section>
          { this.displayChoice(this.props.currentDisplay) }
        </section>            
        <section className="tims-buttons"> 
          <button className="tim-back-button" onClick={ this.props.startOver }>BACK</button>
          <button className="tim-forward-button" onClick={ this.props.startOver }>NEXT</button>
        </section>
      </section>
    );
  }
}

export default TinctureChoices;