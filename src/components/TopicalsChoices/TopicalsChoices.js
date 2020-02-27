import React, { Component } from 'react';
import LogoSelector from '../LogoSelector/LogoSelector';
import TopicalChoice from '../../images/form-options/topical-icon.jpg';


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
    const { name, value } = event.target;
    this.setState({ selectionName: name, selectionValue: value }, () => this.handleClick(event))
  }

  displayChoice = (status) => {
    switch (status) {
      case 'quantity':
        return <article>
            <h4>Please select the number of bottles you're interested in:</h4>
            <form>
              <input
                type="number"
                placeholder="100"
                name="quantity"
                value={this.state.selectionValue}
                onChange={this.handleChange}
              />
              <button onClick={this.handleClick}>SUBMIT</button>
            </form>
          </article>
      // case 1:
      //   return <article>
      //     <h4>Please select your container size:</h4>
      //     <form>
      //       <input type="radio" id="size-one" name="container" value="Lotion Size One" onChange={this.handleChangeNoButton} />
      //         <label for="size-one">Lotion Size One</label>
      //       <input type="radio" id="size-two" name="container" value="Lotion Size Two" onChange={this.handleChangeNoButton} />
      //         <label for="size-two">Lotion Size Two</label>
      //     </form>
      //   </article>
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
      case 'scent':
        return <article>
          <h4>Please select your scent:</h4>
          <form>
            <input type="radio" id="tea-tree" name="scent" value="Tea Tree Oil" onChange={this.handleChangeNoButton} />
            <label for="tea-tree">Tea Tree Oil</label>
            <input type="radio" id="unscented" name="scent" value="Unscented" onChange={this.handleChangeNoButton} />
            <label for="unscented">Unscented</label>

          </form>
        </article>
      case 'potency':
        return <article>
          <h4>Please select your potency per serving:</h4>
          <form>
            <input type="radio" id="15mg" name="potency" value="15 mg" onChange={this.handleChangeNoButton} />
            <label for="15mg">15 mg</label>
            <input type="radio" id="25mg" name="potency" value="25 mg" onChange={this.handleChangeNoButton} />
            <label for="25mg">25 mg</label>
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

export default TopicalsChoices;