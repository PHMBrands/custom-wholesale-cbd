import React, { Component } from 'react';
import labelSource from '../../images/label-parts/tincture-template.jpg';
import guavaLime from '../../images/label-parts/flavor-choice.jpg';

class LabelCreator extends Component {
  constructor(props) {
    super(props);

  }

  // onImageDrop(files) {
  //   this.setState({ uploadedFile: files[0] });
  //   this.handleImageUpload(files[0]);
  // }

  renderFlavorImage = (status) => {
    switch(status) {
      case 'Guava Lime':
        return <div><img src={ guavaLime } class="flavor-choice" /></div>
      default: 
        return <div>This switch statement works kind of.</div>
    }
  }

  render() {
    return <div>
        <img src={ labelSource } />
        {/* <div>Quantity: {this.props.currentSelections.quantity}</div> */}
        {this.props.currentSelections.flavor &&
          <div>Flavor: {this.renderFlavorImage('Guava Lime')}</div>}
      </div>

  }
}

export default LabelCreator;