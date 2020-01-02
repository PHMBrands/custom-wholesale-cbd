import React from 'react';

const SelectionDisplay = (props) => {



  return <section>
      { props.currentSelections.quantity && 
        <button onClick={ () => props.updateDisplay(0) }>Quantity: {props.currentSelections.quantity}</button> }
      { props.currentSelections.container && 
        <button onClick={() => props.updateDisplay(1)}>Container Size: { props.currentSelections.container }</button> }
      { props.currentSelections.softgelSize && 
        <button onClick={() => props.updateDisplay(1)}>Softgel Size: {props.currentSelections.softgelSize }</button> }
      { props.currentSelections.flavor && 
        <button onClick={() => props.updateDisplay(2)}>Flavor: { props.currentSelections.flavor }</button> }
      { props.currentSelections.carrier && 
        <button onClick={() => props.updateDisplay(3)}>Carrier Oil: { props.currentSelections.carrier }</button> }
      { props.currentSelections.spectrum && 
        <button onClick={() => props.updateDisplay(4)}>Spectrum: { props.currentSelections.spectrum }</button> }
      { props.currentSelections.scent && 
        <button onClick={() => props.updateDisplay(4)}>Scent: { props.currentSelections.scent }</button> }
      { props.currentSelections.potency && 
        <button onClick={() => props.updateDisplay(5)}>Potency: { props.currentSelections.potency }</button> }
      { props.currentSelections.softgelPerBottle && 
        <button onClick={() => props.updateDisplay(5)}>Softgels per bottle: {props.currentSelections.softgelPerBottle }</button> }
    </section>
}

export default SelectionDisplay