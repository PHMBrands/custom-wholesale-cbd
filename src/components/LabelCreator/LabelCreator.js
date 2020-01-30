import React, { Component } from 'react';
import defaultTinctureLabel from '../../images/label-parts/tincture-template.jpg';
import Gym from '../../images/logo-selector/gym.svg';
import Hemp from '../../images/logo-selector/hemp.svg'
import Moon from '../../images/logo-selector/moon.svg';
import Yoga from '../../images/logo-selector/yoga.svg';

class LabelCreator extends Component {
  constructor(props) {
    super(props);

  }

  // onImageDrop(files) {
  //   this.setState({ uploadedFile: files[0] });
  //   this.handleImageUpload(files[0]);
  // }

  // renderFlavorImage = (status) => {
  //   switch(status) {
  //     case 'Guava Lime':
  //       return <div><img src={ guavaLime } /></div>
  //     default: 
  //       return (
  //         <div>
  //           <p>The flavor switch statement went to default.</p>
  //           <p>{ this.props.currentSelections.flavor }</p>
  //         </div>
  //       );
  //   }
  // }

  // renderSpectrumImage = (status) => {
  //   switch (status) {
  //     case 'Full Spectrum':
  //       return <div><img src={fullSpectrum} /></div>;
  //     default:
  //       return <div>The spectrum switch statement went to default.</div>;
  //   }
  // }

  // renderPotencyImage = (status) => {
  //   switch (status) {
  //     case '20 mg':
  //       return <div><img src={twentyMg} /></div>;
  //     default:
  //       return <div>The potency switch statement went to default.</div>;
  //   }
  // }

  // renderPerBottleImage = (status) => {
  //   switch (status) {
  //     case '20 mg':
  //       return <div><img src={ sixHundredMg } /></div>;
  //     default:
  //       return <div>The potency switch statement went to default.</div>;
  //   }
  // }

  renderDefaultLabel = (status) => {
    switch (status) {
      case 'tinctures':
        return <div><img src={ defaultTinctureLabel } /></div>;
      case 'softgels':
        return <div>Default softgel label needed</div>;
      case 'topicals':
        return <div>Default Topical label needed</div>;
      case 'products':
        return <div></div>;
      default:
        return <div>The renderDefaultLabel switch statement went to default.</div>;
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
      <div>
        { this.renderDefaultLabel(this.props.productSelected) }
        {/* <img src={labelSource} /> */}
        {/* <div>Quantity: {this.props.currentSelections.quantity}</div> */}
        { this.props.currentSelections.flavor && 
          <div className="flavor-selection">
            <p>{ this.props.currentSelections.flavor }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          </div> }
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
      </div>
    );

  }
}

export default LabelCreator;