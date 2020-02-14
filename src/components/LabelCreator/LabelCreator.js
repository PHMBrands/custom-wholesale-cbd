import React, { Component } from 'react';
import defaultTinctureLabel from '../../images/label-parts/tincture-template-update-two.jpg';
// import Gym from '../../images/logo-selector/gym.svg';
// import Hemp from '../../images/logo-selector/hemp.svg'
// import Moon from '../../images/logo-selector/moon.svg';
// import Yoga from '../../images/logo-selector/yoga.svg';
import GreenCross from '../../images/logo-selector/green-health-icon.png';
import Mortar from '../../images/logo-selector/hemp-mortar.png';
import LeafLogo from '../../images/logo-selector/leaf-logo-icon.png';
import LeafPremium from '../../images/logo-selector/leaf-premium.png';
import PremiumLeaf from '../../images/logo-selector/premium-leaf.png';

class LabelCreator extends Component {

  renderDefaultLabel = (status) => {
    switch (status) {
      case 'Tinctures':
        return <section className="tincture-label">
          <section className="margin-creator"></section>
            <img src={ defaultTinctureLabel } alt="Default Tincture label" className="default-tincture-label" />
            { this.props.company.personsName && 
              <button className="tincture-company-name-selection">{ this.props.company.companyName }</button> }
            { this.props.company.personsName && 
              <button className="tincture-company-info-selection">
                <p className="manufactured-for">Manufactured For:</p>
                <p className="company-name"></p>{ this.props.company.companyName }
                <p className="person-name">{ this.props.company.personsName }</p>
                <p className="company-email">{ this.props.company.email }</p>
                <p className="company-phone">{ this.props.company.phone }</p>
              </button> }
            { this.props.currentSelections.flavor &&
              <button className="tincture-flavor-selection" onClick={ () => this.props.updateDisplay('flavor') }> { this.props.currentSelections.flavor }</button> }
            { this.props.currentSelections.carrier && 
              <button className="tincture-carrier-selection" onClick={ () => this.props.updateDisplay('carrier') }>{ this.props.currentSelections.carrier },</button> }
            { this.props.currentSelections.spectrum && 
              <button className="tincture-spectrum-selection" onClick={ () => this.props.updateDisplay('spectrum') }>{ this.props.currentSelections.spectrum }<br/><span>CBD Oil Supplement</span></button> }
            { this.props.currentSelections.potency && 
              <button className="tincture-potency-selection" onClick={ () => this.props.updateDisplay('potency') }>{ this.props.currentSelections.potency }<br /><span>CBD per serving</span></button> }
            { this.props.logoChoice && 
              <button className="tincture-logo-selection" onClick={ () => this.props.updateDisplay('logo') }>{this.renderLogoImage(this.props.logoChoice)}</button> }
              <section className="margin-creator"></section>
          </section>;
      case 'Softgels':
        return <div>Default softgel label needed</div>;
      case 'Topicals':
        return <div>Default Topical label needed</div>;
      case 'products':
        return <div></div>;
      case 'company':
        return <div></div>
      default:
        return <div>The renderDefaultLabel switch statement in LabelCreator went to default.</div>;
    }
  }
  
  renderLogoImage = (status) => {
    switch (status) {
      case 'green cross':
        return <img src={ GreenCross } alt="Gym icon" className="label-creator-logo" />;
      case 'leaf premium':
        return <img src={ LeafPremium } alt="Hemp icon" className="label-creator-logo" />;
      case 'premium leaf':
        return <img src={ PremiumLeaf } alt="Moon icon" className="label-creator-logo" />;
      case 'mortar':
        return <img src={ Mortar } alt="Yoga icon" className="label-creator-logo" />;
      case 'leaf logo':
        return <img src={ LeafLogo } alt="Yoga icon" className="label-creator-logo" />;  
      default:
        return <div>The renderLogoImage switch statement went to default.</div>;
    }
  }

  render() {

    return (
      <section className="label-display">
        { this.renderDefaultLabel(this.props.productSelected) }
        {/* <div>Quantity: {this.props.currentSelections.quantity}</div> */}
        {/* { this.props.company.companyName && 
          <button className="tincture-company-name-selection">{ this.props.company.companyName }</button> } */}
        {/* { this.props.company.companyName && 
          <button className="tincture-company-info-selection">
              <p className="manufactured-for">Manufactured For:</p>
              <p className="company-name"></p>{ this.props.company.companyName }
              <p className="person-name">{ this.props.company.personsName }</p>
              <p className="company-email">{ this.props.company.email }</p>
              <p className="company-phone">{ this.props.company.phone }</p>

          </button> } */}


        {/* { this.props.company.address && 
          <div className="company-address-selection">
            <p>{ this.props.company.address }</p>
          </div> }
        { this.props.company.phone && 
          <div className="company-phone-selection">
            <p>{ this.props.company.phone }</p>
          </div> } */}


          {/* { this.props.currentSelections.flavor && 
          <div className="flavor-selection">
            <p>{ this.props.currentSelections.flavor }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          {/* </div> }  */}

          {/* { this.props.currentSelections.flavor &&
            <button className="tincture-flavor-selection" onClick={ () => this.props.updateDisplay(1) }> { this.props.currentSelections.flavor }</button> } */}

          
        {/* { this.props.currentSelections.softgelSize && 
          <div className="softgel-size-selection">
              <p>{ this.props.currentSelections.softgelSize }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          {/* </div> }   */}


        {/* { this.props.currentSelections.carrier && 
              <button className="tincture-carrier-selection" onClick={ () => this.props.updateDisplay(2) }>{ this.props.currentSelections.carrier },</button> } */}



        {/* { this.props.currentSelections.spectrum && 
          <button className="tincture-spectrum-selection" onClick={ () => this.props.updateDisplay(3) }>{ this.props.currentSelections.spectrum }<br/><span>CBD Oil Supplement</span></button>} */}


{/* 
        { this.props.currentSelections.scent && 
          <div className="spectrum-selection">
            <p>{ this.props.currentSelections.scent }</p>
            {/* {this.renderSpectrumImage("Full Spectrum")} */}
          {/* </div> } */}
 

        {/* { this.props.currentSelections.potency && 
          <button className="tincture-potency-selection" onClick={ () => this.props.updateDisplay(4) }>{ this.props.currentSelections.potency }<br /><span>CBD per serving</span></button> } */}



{/* 
        { this.props.currentSelections.softgelPerBottle && 
          <div className="softgel-per-bottle-selection">
            <p>{ this.props.currentSelections.softgelPerBottle }</p>
            {/* {this.renderSpectrumImage("Full Spectrum")} */}
          {/* </div> } */} 
        {/* { this.props.logoChoice && 
          <div className="logo-selection">{this.renderLogoImage(this.props.logoChoice)}</div> } */}

      </section>
    );
  }
}

export default LabelCreator;