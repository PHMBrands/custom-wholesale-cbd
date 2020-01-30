import React, { Component } from 'react';

class CompanyInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companyName: '',
      address: '',
      phone: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.createCompany(this.state)
  }
  
  render() {
    return <section className="company-form">
        <form>
          <input 
            type="text" 
            placeholder="Company Name"
            name="companyName"
            value={ this.state.selectionValue}
            onChange={ this.handleChange }
          />
          <input 
            type="text" 
            placeholder="Address"
            name="address"
            value={ this.state.selectionValue}
            onChange={ this.handleChange }
          />
          <input 
            type="text" 
            placeholder="Phone"
            name="phone"
            value={ this.state.selectionValue}
            onChange={ this.handleChange }
          /> 
        <button onClick={ this.handleClick }>SUBMIT</button>
        </form>
      </section>
  }
}

export default CompanyInfo;