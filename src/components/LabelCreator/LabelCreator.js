import React, { Component } from 'react';
import labelSource from '../../images/label-parts/tincture-template.jpg';
import guavaLime from '../../images/label-parts/flavor-choice.jpg';
import fullSpectrum from '../../images/label-parts/spectrum.jpg';
import twentyMg from '../../images/label-parts/per-serving.jpg';
import sixHundredMg from '../../images/label-parts/per-bottle.jpg';
import Yoga from '../../images/logo-selector/yoga.svg';
import Gym from '../../images/logo-selector/gym.svg';

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
  
  // renderLogoImage = (status) => {
  //   switch (status) {
  //     case 'gym':
  //       return <div><img src={Gym} className="logo" /></div>;
  //     default:
  //       return <div>The potency switch statement went to default.</div>;
  //   }
  // }

  render() {
    return (
      <div>
        <img src={labelSource} />
        {/* <div>Quantity: {this.props.currentSelections.quantity}</div> */}
        {this.props.currentSelections.flavor && (
          <div className="flavor-selection">
              <p>{ this.props.currentSelections.flavor }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          </div>
        )}
        {this.props.currentSelections.carrier && (
          <div className="carrier-selection">
              <p>{ this.props.currentSelections.carrier }</p>
            {/* {this.renderFlavorImage(this.props.currentSelections.flavor)} */}
          </div>
        )}
        {this.props.currentSelections.spectrum && (
          <div className="spectrum-selection">
            <p>{ this.props.currentSelections.spectrum }</p>

            {/* {this.renderSpectrumImage("Full Spectrum")} */}
          </div>
        )}
        {this.props.currentSelections.potency && (
          <div>
            <div className="potency-selection">
              <p>{ this.props.currentSelections.potency } </p>
              {/* {this.renderPotencyImage("20 mg")} */}
            </div>
            <div className="per-bottle-selection">
              { this.props.currentSelections.potency }
              {/* {this.renderPerBottleImage("20 mg")} */}
            </div>
          </div>
        )}
        {this.props.logoChoice && (
          <div className="logo-selection">{this.renderLogoImage("gym")}</div>
        )}
      </div>
    );

  }
}

export default LabelCreator;