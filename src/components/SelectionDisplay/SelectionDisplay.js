import React from 'react';

const SelectionDisplay = (props) => {

  return <section>
      { props.currentSelections.quantity && <p>Quantity: {props.currentSelections.quantity}</p>}
      { props.currentSelections.container && <p>Container Size: { props.currentSelections.container }</p> }
      { props.currentSelections.flavor && <p>Flavor: { props.currentSelections.flavor }</p> }
      { props.currentSelections.carrier && <p>Carrier Oil: { props.currentSelections.carrier }</p> }
      { props.currentSelections.spectrum && <p>Spectrum: { props.currentSelections.spectrum }</p> }
      { props.currentSelections.potency && <p>Potency: { props.currentSelections.potency }</p> }
    </section>
}

export default SelectionDisplay