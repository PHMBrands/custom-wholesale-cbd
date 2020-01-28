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

  render() {
    return <div>
        <img src={labelSource} />
        {/* <div>Quantity: {this.props.currentSelections.quantity}</div> */}
        {this.props.currentSelections.flavor &&
          <div>Flavor: {this.props.currentSelections.flavor}</div>}
      </div>

  }
}

export default LabelCreator;