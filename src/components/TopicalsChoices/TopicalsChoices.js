import React, { Component } from 'react';
import LogoSelector from '../LogoSelector/LogoSelector';
import TopicalChoice from '../../images/form-options/topical-icon.jpg';
import FullSpectrum from '../../images/choice-button-icons/full-spectrum.svg';
import BroadSpectrum from '../../images/choice-button-icons/no-thc.svg'
import Cooling from '../../images/choice-button-icons/fan.svg';
import TeaTree from '../../images/choice-button-icons/leaf.svg';
import Lotion from '../../images/choice-button-icons/lotion.svg';


class TopicalsChoices extends Component {
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
    event.preventDefault()
    const { name, value } = event.target;
    this.setState({ selectionName: name, selectionValue: value }, () => this.props.updateSelectionsObject(this.state));
  }

  displayStep = (status) => {
    switch(status) {
      case 'quantity':
        return <p className="step-explanation"><span className="step-number">Step 3: </span>Number of lotion containers</p>
      case 'spectrum':
        return <p className="step-explanation"><span className="step-number">Step 6: </span>Choose your spectrum</p>
      case 'scent':
        return <p className="step-explanation"><span className="step-number">Step 4: </span>Choose your scent</p>
      case 'potency':
        return <p className="step-explanation"><span className="step-number">Step 7: </span>Choose your potency per serving</p>
      case 'logo':
        return <p className="step-explanation"><span className="step-number">Step 8: </span>Choose your potency per serving</p>
      default:
        return <div>Something went wrong with the displayStep switch statement in TinctureChoices component</div>  
    }
  }

  displayChoice = (status) => {
    switch (status) {
      case 'quantity':
        return <article>
            <select id="quantity-dropdown" name="quantity" onChange={ this.handleChangeNoButton }>
                <option value="less than 250">less than 250</option>
                <option value="250 to 500<">250 to 500</option>
                <option value="500 to 1000">500-1,000</option>
                <option value="more than 1,000">more than 1,000</option>
              </select>
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
      case 'scent':
        return <article>
            <form className="tincture-spectrum">
              <button name="spectrum" value="Full Spectrum" onClick={ this.handleChangeNoButton }>
                <img src={ Cooling } className="spectrum-button-logos" />
                <p>Cooling</p>
              </button>
              <button name="spectrum" value="Broad Spectrum" onClick={ this.handleChangeNoButton }>
                <img src={ TeaTree } className="spectrum-button-logos" />
                <p>Tea Tree</p>
              </button>
              <button name="spectrum" value="Broad Spectrum" onClick={ this.handleChangeNoButton }>
                <img src={ Lotion } className="spectrum-button-logos" />
                <p>Unscented</p>
              </button>
            </form>
          </article>
      case 'potency':
        return <article className="tincture-potency">
            <form>
              <button name="potency" value="10 mg" onClick={ this.handleChangeNoButton }>
                <p><span className="potency-big-number">10</span>mg</p>
                <p className="potency-per-bottle">per softgel</p>
              </button>
              <button name="potency" value="25 mg" onClick={ this.handleChangeNoButton }>
                <p><span name="potency" className="potency-big-number">25</span>mg</p>
                <p className="potency-per-bottle">per softgel</p>
              </button>
            </form>
          </article>
      case 'logo':
        return <article>
            <LogoSelector setLogoChoice={ this.props.setLogoChoice } />
          </article>
      default:
        return <div>We're sorry, something seems to have gone wrong. Please reload the page.</div>
    }
  }

  render() {

    const displayTimButtons = () => {
      if (this.props.currentDisplay === 'logo') {
        return "no-tim-button"
      } else {
        return "tim-forward-button"
      }

      // return (this.props.currentDisplay === 'logo' ? "tim-forward-button" : "no-tim-button")
    }

    return (
        <section className="tincture-choices">
        { this.displayStep(this.props.currentDisplay) }
        <section className="product-photo-and-choices">
          <section className="product-sidecar-photo">
            <img src={ TopicalChoice } className="product-choice-image" />
            <p className="product-sidecar-photo-description">This is Lotion, you rub it</p>
          </section>
          <section className="product-sidecar-choices">
            { this.displayChoice(this.props.currentDisplay) }
          </section>
        </section>            
        <section className="tims-buttons"> 
          <button className="tim-back-button" onClick={ this.props.regressDisplay }>←BACK</button>
          <button className={ displayTimButtons() } onClick={ this.props.progressDisplay }>NEXT→</button>
          {/* <button className="tim-forward-button" onClick={ this.props.progressDisplay }>NEXT→</button> */}
        </section>
      </section>
    );
  }
}

export default TopicalsChoices;