import React, { Component } from 'react';
import LogoSelector from '../LogoSelector/LogoSelector';
import Wheat from '../../images/choice-button-icons/wheat.svg';
import Coconut from '../../images/choice-button-icons/coconut.svg';
import SoftgelChoice from '../../images/form-options/softgel-icon.jpg';
import FullSpectrum from '../../images/choice-button-icons/full-spectrum.svg';
import BroadSpectrum from '../../images/choice-button-icons/no-thc.svg'



class SoftgelChoices extends Component {
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

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ selectionName: name, selectionValue: value });
  // }

  handleChangeNoButton = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ selectionName: name, selectionValue: value }, () => this.props.updateSelectionsObject(this.state));
  }

  displayStep = (status) => {
    switch(status) {
      case 'quantity':
        return <p className="step-explanation"><span className="step-number">Step 3: </span>Number of Softgel bottles</p>
      case 'softgelSize':
        return <p className="step-explanation"><span className="step-number">Step 4: </span>Choose your softgel size</p>
      case 'carrier':
        return <p className="step-explanation"><span className="step-number">Step 5: </span>Choose your carrier oil</p>
      case 'spectrum':
        return <p className="step-explanation"><span className="step-number">Step 6: </span>Choose your spectrum</p>
      case 'potency':
        return <p className="step-explanation"><span className="step-number">Step 7: </span>Choose your potency per serving</p>
      case 'softgelPerBottle':
          return <p className="step-explanation"><span className="step-number">Step 8: </span>Choose your number of softgels per bottle</p>
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
            {/* <form className="company-form">
              <input 
                type="number" 
                name="quantity"
                value={ this.state.selectionValue }
                onChange={ this.handleChange }
              />
              <button onClick={ this.handleClick }>SUBMIT</button>
            </form> */}
            <select id="quantity-dropdown" name="quantity" onChange={ this.handleChangeNoButton }>
                <option value="less than 250">less than 250</option>
                <option value="250 to 500<">250 to 500</option>
                <option value="500 to 1000">500-1,000</option>
                <option value="more than 1,000">more than 1,000</option>
              </select>
          </article>
        // return <article>
        //   <h4>Please select the number of bottles you're interested in:</h4>
        //   <form className="company-form">
        //     <input
        //       type="number"
        //       placeholder="100"
        //       name="quantity"
        //       value={ this.state.selectionValue }
        //       onChange={ this.handleChange }
        //     />
        //     <button onClick={ this.handleClick }>SUBMIT</button>
        //   </form>
        // </article>
      case 'softgelSize':
        return <article className="tincture-potency">
            <form>
              <button name="softgelSize" value="15 mg" onClick={ this.handleChangeNoButton }>
                <p><span className="potency-big-number">15</span>ml</p>
                <p className="potency-per-bottle">softgel</p>
              </button>
              <button name="softgelSize" value="30 ml" onClick={ this.handleChangeNoButton }>
                <p><span className="potency-big-number">30</span>ml</p>
                <p className="potency-per-bottle">softgel</p>
              </button>
            </form>
          </article>
        // return <article>
        //     <form>
        //       <button name="softgelSize" value="15mg" onClick={ this.handleChangeNoButton } >
        //         {/* <img src={ Guava } className="tincture-flavor-button-icons" /> */}
        //         <p>15mg</p>
        //       </button>
        //       <button name="softgelSize" value="25mg" onClick={ this.handleChangeNoButton } >
        //         {/* <img src={ Guava } className="tincture-flavor-button-icons" /> */}
        //         <p>25mg</p>
        //       </button>
        //       {/* <input type="radio" id="15mg" name="softgelSize" value="15mg" onChange={this.handleChangeNoButton} />
        //       <label for="15mg">15mg</label>
        //       <input type="radio" id="25mg" name="softgelSize" value="25mg" onChange={this.handleChangeNoButton} />
        //       <label for="25mg">25mg</label> */}
        //     </form>
        //   </article>
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
        // return <article>
        //     <h4>Please select your carrier oil:</h4>
        //     <form>
        //       <button name="carrier" value="Wheat Germ Oil" onClick={ this.handleChangeNoButton }>
        //         <img src={ Wheat } className="carrier-button-logos" />
        //         <p>Wheat Germ Oil</p>
        //       </button>
        //       <button name="carrier" value="MCT Oil" onClick={ this.handleChangeNoButton }>
        //         <img src={ Coconut } className="carrier-button-logos" />
        //         <p>MCT Oil</p>
        //       </button> 
{/*               
              <input type="radio" id="wheat-germ-oil" name="carrier" value="Wheat Germ Oil" onChange={ this.handleChangeNoButton } />
              <label for="wheat-germ-oil">Wheat Germ Oil</label>
              <input type="radio" id="mct-oil" name="carrier" value="MCT Oil" onChange={ this.handleChangeNoButton } />
              <label for="mct-oil">MCT Oil</label> */}
            // </form>
          // </article>
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
                <p className="potency-per-bottle">per softgel</p>
              </button>
              <button name="potency" value="25 mg" onClick={ this.handleChangeNoButton }>
                <p><span name="potency" className="potency-big-number">25</span>mg</p>
                <p className="potency-per-bottle">per softgel</p>
              </button>
            </form>
          </article>
      case 'softgelPerBottle':
        return <article className="tincture-potency">
            <form>
              <button name="potency" value="30" onClick={ this.handleChangeNoButton }>
                <p><span className="potency-big-number">30</span></p>
                <p className="potency-per-bottle">per bottle</p>
              </button>
              <button name="potency" value="" onClick={ this.handleChangeNoButton }>
                <p><span name="potency" className="potency-big-number">60</span></p>
                <p className="potency-per-bottle">per bottle</p>
              </button>
            </form>
          </article>
        // return <article>
        //     <h4>Please select the number of softgels per bottle:</h4>
        //     <form>
        //       <input type="radio" id="30-softgels" name="softgelPerBottle" value="30" onChange={ this.handleChangeNoButton } />
        //       <label for="30-softgels">30 softgels per bottle</label>
        //       <input type="radio" id="60-softgels" name="softgelPerBottle" value="60" onChange={ this.handleChangeNoButton } />
        //       <label for="60-softgels">60 softgels per bottle</label>
        //     </form>  
        //   </article> 
      case 'logo':
        return <article>
            <LogoSelector setLogoChoice={ this.props.setLogoChoice } />
          </article>
      default:
        return <div>We're sorry, something seems to have gone wrong. Please reload the page.</div>
    }
  }

  render() {
    // let backButton

    // if (this.state.selectionName !== 'quantity') {
    //   backButton = <button onClick={ this.props.regressDisplay }>Previous Option</button>
    // } else {
    //   backButton = <button onClick={ this.props.backToCompanyInfo }>BACK</button>
    // }

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
            <img src={ SoftgelChoice } className="product-choice-image" />
            <p className="product-sidecar-photo-description">This is a softgel bottle</p>
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

export default SoftgelChoices;