import React from 'react';

const SelectionDisplay = (props) => {

  //updateDisplay argument must correspond with corresponding switch statement in TinctureChoices
  let tinctureOptions = ['quantity', 'flavor', 'carrier', 'spectrum', 'potency']
  

  return <section className="selection-display-test">

      <button onClick={ () => props.updateDisplay(0) }>Quantity: {props.currentSelections.quantity}</button>
      <button onClick={() => props.updateDisplay(1) }>Container Size: { props.currentSelections.container }</button> 
      <button onClick={() => props.updateDisplay(1) }>Softgel Size: {props.currentSelections.softgelSize }</button> 
      <button onClick={() => props.updateDisplay(1) }>Flavor: { props.currentSelections.flavor }</button>
      <button onClick={() => props.updateDisplay(2) }>Carrier Oil: { props.currentSelections.carrier }</button>
      <button onClick={() => props.updateDisplay(3) }>Spectrum: { props.currentSelections.spectrum }</button>
      <button onClick={() => props.updateDisplay(4) }>Scent: { props.currentSelections.scent }</button>
      <button onClick={() => props.updateDisplay(4) }>Potency: { props.currentSelections.potency }</button>
      <button onClick={() => props.updateDisplay(5) }>Softgels per bottle: {props.currentSelections.softgelPerBottle }</button>
    </section>

  // return <section>
  //     {/* Quantity */}
  //      {/* props.currentSelections.quantity &&  */}
  //       <button onClick={ () => props.updateDisplay(0) }>Quantity: {props.currentSelections.quantity}</button>
  //     {/* Container */}
  //     {/* { props.currentSelections.container &&  */}
  //       <button onClick={() => props.updateDisplay(1) }>Container Size: { props.currentSelections.container }</button> 
  //     {/* SoftgelSize */}
  //     {/* { props.currentSelections.softgelSize &&  */}
  //       <button onClick={() => props.updateDisplay(1) }>Softgel Size: {props.currentSelections.softgelSize }</button> 
  //     {/* Flavor */}
  //     { props.currentSelections.flavor && 
  //       <button onClick={() => props.updateDisplay(1) }>Flavor: { props.currentSelections.flavor }</button> }
  //     {/* Carrier Oil */}
  //     { props.currentSelections.carrier && 
  //       <button onClick={() => props.updateDisplay(2) }>Carrier Oil: { props.currentSelections.carrier }</button> }
  //     {/* Spectrum */}
  //     { props.currentSelections.spectrum && 
  //       <button onClick={() => props.updateDisplay(3) }>Spectrum: { props.currentSelections.spectrum }</button> }
  //     {/* Scent */}
  //     { props.currentSelections.scent && 
  //       <button onClick={() => props.updateDisplay(4) }>Scent: { props.currentSelections.scent }</button> }
  //     {/* Potency */}
  //     { props.currentSelections.potency && 
  //       <button onClick={() => props.updateDisplay(4) }>Potency: { props.currentSelections.potency }</button> }
  //     {/* Softgels per bottle */}
  //     { props.currentSelections.softgelPerBottle && 
  //       <button onClick={() => props.updateDisplay(5) }>Softgels per bottle: {props.currentSelections.softgelPerBottle }</button> }
  //   </section>
}

export default SelectionDisplay