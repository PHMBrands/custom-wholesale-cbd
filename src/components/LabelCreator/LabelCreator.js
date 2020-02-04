import React, { Component } from 'react';
import defaultTinctureLabel from '../../images/label-parts/tincture-template-update.jpg';
import Gym from '../../images/logo-selector/gym.svg';
import Hemp from '../../images/logo-selector/hemp.svg'
import Moon from '../../images/logo-selector/moon.svg';
import Yoga from '../../images/logo-selector/yoga.svg';

class LabelCreator extends Component {
  constructor(props) {
    super(props);

  }

  renderDefaultLabel = (status) => {
    switch (status) {
      case 'Tinctures':
        return <img src={ defaultTinctureLabel } className="default-tincture-label" />;
      case 'Softgels':
        return <div>Default softgel label needed</div>;
      case 'Topicals':
        return <div>Default Topical label needed</div>;
      case 'products':
        return <div></div>;
      case 'company':
        return<div></div>
      default:
        return <div>The renderDefaultLabel switch statement in LabelCreator went to default.</div>;
    }
  }
  
  renderLogoImage = (status) => {
    switch (status) {
      case 'gym':
        return <div><img src={ Gym } className="logo" /></div>;
      case 'hemp':
        return <div><img src={ Hemp } className="logo" /></div>;
      case 'moon':
        return <div><img src={ Moon } className="logo" /></div>;
      case 'yoga':
        return <div><img src={ Yoga } className="logo" /></div>;  
      default:
        return <div>The renderLogoImage switch statement went to default.</div>;
    }
  }

  render() {

    return (
      <section className="label-display">
        { this.renderDefaultLabel(this.props.productSelected) }
        {/* <img src={labelSource} /> */}
        {/* <div>Quantity: {this.props.currentSelections.quantity}</div> */}
        { this.props.company.companyName && 
          <div className="company-name-selection">
            <p>{ this.props.company.companyName }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          </div> }
        { this.props.company.address && 
          <div className="company-address-selection">
            <p>{ this.props.company.address }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          </div> }
        { this.props.company.phone && 
          <div className="company-phone-selection">
            <p>{ this.props.company.phone }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          </div> }


          {/* { this.props.currentSelections.flavor && 
          <div className="flavor-selection">
            <p>{ this.props.currentSelections.flavor }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          {/* </div> }  */}

          { this.props.currentSelections.flavor &&
            <button className="flavor-selection"> { this.props.currentSelections.flavor }</button> }

          
        { this.props.currentSelections.softgelSize && 
          <div className="softgel-size-selection">
              <p>{ this.props.currentSelections.softgelSize }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          </div> }  
        { this.props.currentSelections.carrier && 
          <div className="carrier-selection">
              <p>{ this.props.currentSelections.carrier }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          </div> }
        { this.props.currentSelections.spectrum && 
          <div className="spectrum-selection">
            <p>{ this.props.currentSelections.spectrum }</p>
            {/* {this.renderSpectrumImage("Full Spectrum")} */}
          </div> }
        { this.props.currentSelections.scent && 
          <div className="spectrum-selection">
            <p>{ this.props.currentSelections.scent }</p>
            {/* {this.renderSpectrumImage("Full Spectrum")} */}
          </div> }
        { this.props.currentSelections.potency && 
          <div>
            <div className="potency-selection">
              <p>{ this.props.currentSelections.potency } </p>
              {/* {this.renderPotencyImage("20 mg")} */}
            </div>
            <div className="per-bottle-selection">
              { this.props.currentSelections.potency }
              {/* {this.renderPerBottleImage("20 mg")} */}
            </div>
          </div> }
        { this.props.currentSelections.softgelPerBottle && 
          <div className="softgel-per-bottle-selection">
            <p>{ this.props.currentSelections.softgelPerBottle }</p>
            {/* {this.renderSpectrumImage("Full Spectrum")} */}
          </div> }
        { this.props.logoChoice && 
          <div className="logo-selection">{this.renderLogoImage(this.props.logoChoice)}</div> }
      </section>
    );
  }
}

export default LabelCreator;