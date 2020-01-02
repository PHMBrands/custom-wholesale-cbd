import React, { Component } from 'react';

class LabelCreator extends Component {
  constructor(props) {
    super(props);

  }

  onImageDrop(files) {
    this.setState({ uploadedFile: files[0] });
    this.handleImageUpload(files[0]);
  }

  render() {
    return <div>We are testing the labelcreataor again</div>
  }
}

export default LabelCreator;