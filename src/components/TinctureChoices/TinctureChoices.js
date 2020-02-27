import React, { Component } from 'react';
import LogoSelector from '../LogoSelector/LogoSelector';
import FullSpectrum from '../../images/choice-button-icons/full-spectrum.svg';
import BroadSpectrum from '../../images/choice-button-icons/no-thc.svg'
import Guava from '../../images/choice-button-icons/guava.svg';
import Mint from '../../images/choice-button-icons/mint.svg';
import Mojito from '../../images/choice-button-icons/mojito.svg';
import Peppermint from '../../images/choice-button-icons/peppermint.svg';
import Popsicle from '../../images/choice-button-icons/popsicle.svg';
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

  displayStep = (status) => {
    switch(status) {
      case 'quantity':
        return <p className="step-explanation"><span className="step-number">Step 2: </span>Number of tinctures</p>
      case 'flavor':
        return <p className="step-explanation"><span className="step-number">Step 3: </span>Choose your flavor</p>
      case 'carrier':
        return <p className="step-explanation"><span className="step-number">Step 4: </span>Choose your carrier oil</p>
      case 'spectrum':
        return <p className="step-explanation"><span className="step-number">Step 5: </span>Choose your spectrum</p>
      case 'potency':
        return <p className="step-explanation"><span className="step-number">Step 6: </span>Choose your potency per serving</p>
      case 'logo':
        return <p className="step-explanation"><span className="step-number">Step 7: </span>Choose your potency per serving</p>
      default:
        return <div>Something went wrong with the displayStep switch statement in TinctureChoices component</div>  
    }
  }

  displayChoice = (status) => {
    switch(status) {
      case 'quantity':
        return <article className="company-form-article">
            {/* <form className="company-form">
              <input 
                type="number" 
                name="quantity"
                value={ this.state.selectionValue }
                onChange={ this.handleChange }
              />
              <button onClick={ this.handleClick }>SUBMIT</button>
            </form> */}
            {/* <form> */}
              <select id="quantity-dropdown" name="quantity">
                <option value="less than 250">less than 250</option>
                <option value="250 to 500<">250 to 500</option>
                <option value="500 to 1000">500-1,000</option>
                <option value="more than 1,000">more than 1,000</option>
              </select>
            {/* </form> */}
          </article>
      case 'flavor':
        return <article>
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
              <button name="flavor" value="Peppermint" onClick={ this.handleChangeNoButton } >
                <img src={ Peppermint } className="tincture-flavor-button-icons" />
                <p>Peppermint</p>
              </button>
              <button name="flavor" value="Orange Creamsicle" onClick={ this.handleChangeNoButton } >
                <img src={ Popsicle } className="tincture-flavor-button-icons" />
                <p>Orange Creamsicle</p>
              </button>
              <button name="flavor" value="Mint Chocolate" onClick={ this.handleChangeNoButton } >
                <img src={ Mint } className="tincture-flavor-button-icons" />
                <p>Mint Chocolate</p>
              </button>
              <button name="flavor" value="Unflavored" onClick={ this.handleChangeNoButton } >
                <img src={ Hemp } className="tincture-flavor-button-icons" />
                <p>Unflavored</p>
              </button>
            </form>
          </article>
      case 'carrier':
        return <article className="tincture-carrier">
            <form className="tincture-carrier-oil">
              <button name="carrier" value="Wheat Germ Oil" onClick={ this.handleChangeNoButton }>
                <img src={ Wheat } className="carrier-button-logos" />
                <p>Wheat Germ Oil</p>
              </button>
              <button name="carrier" value="MCT Oil" onClick={ this.handleChangeNoButton }>
                <img src={ Coconut } className="carrier-button-logos" />
                <p>MCT Oil</p>
              </button>
            </form>
          </article>
      case 'spectrum':
        return <article>
          <form className="tincture-spectrum">
            <button name="spectrum" value="Full Spectrum" onClick={ this.handleChangeNoButton }>
              <img src={ FullSpectrum } className="spectrum-button-logos" />
              <p>Full Spectrum</p>
            </button>
            <button name="spectrum" value="Broad Spectrum" onClick={ this.handleChangeNoButton }>
              <img src={ BroadSpectrum } className="spectrum-button-logos" />
              <p>Broad Spectrum</p>
            </button>
          </form>
        </article>
      case 'potency':
        return <article className="tincture-potency">
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

    const displayTimButtons = () => {
      
    }

    return (
      <section className="tincture-choices">
        { this.displayStep(this.props.currentDisplay) }
        <section className="product-photo-and-choices">
          <section className="product-sidecar-photo">
            <img src={ TinctureChoice } className="product-choice-image" />
            <p className="product-sidecar-photo-description">30ML amber glass bottle with dropper</p>
          </section>
          <section className="product-sidecar-choices">
            { this.displayChoice(this.props.currentDisplay) }
          </section>
        </section>            
        <section className="tims-buttons"> 
          <button className="tim-back-button" onClick={ this.props.regressDisplay }>←BACK</button>
          <button className={ displayTimButtons() ? "tim-back-button" : "no-tim-button" } onClick={ this.props.progressDisplay }>NEXT→</button>
        </section>
      </section>
    );
  }
}

export default TinctureChoices;