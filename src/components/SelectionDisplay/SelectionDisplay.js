import React from 'react';

const SelectionDisplay = (props) => {

  return <section>
      <p>Quantity: { props.currentSelections.quantity }</p>
      <p>Container Size: { props.currentSelections.container }</p>
      <p>Flavor: { props.currentSelections.flavor }</p>
      <p>Carrier Oil: { props.currentSelections.carrier }</p>
      <p>Spectrum: { props.currentSelections.spectrum }</p>
      <p>Potency: { props.currentSelections.potency }</p>
    </section>
}

export default SelectionDisplay