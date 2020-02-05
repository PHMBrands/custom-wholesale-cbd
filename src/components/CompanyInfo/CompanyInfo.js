import React, { Component } from 'react';

class CompanyInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companyName: '',
      personsName: '',
      email: '',
      phone: '',
      companyEntered: false
    }
  }

  componentDidMount = () => {
    let existingCompany = this.props.company
    if (this.props.company.companyEntered) {
      this.setState({ 
        companyName: existingCompany.companyName,
        personsName: existingCompany.personsName,
        email: existingCompany.email,
        phone: existingCompany.phone
      })
    }
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ companyEntered: true }, () => this.props.createCompany(this.state))
  }
  
  render() {
    return <section className="company-info">
        <form className="company-form">
          <input 
            type="text" 
            placeholder="Company"
            name="companyName"
            value={ this.state.companyName}
            onChange={ this.handleChange }
          />
          <input 
            type="text" 
            placeholder="Your Name"
            name="personsName"
            value={ this.state.personsName}
            onChange={ this.handleChange }
          />
          <input 
            type="text" 
            placeholder="Email"
            name="email"
            value={ this.state.email}
            onChange={ this.handleChange }
          />
          <input 
            type="text" 
            placeholder="Phone"
            name="phone"
            value={ this.state.phone}
            onChange={ this.handleChange }
          /> 
        <button onClick={ this.handleClick }>SUBMIT</button>
        </form>
      </section>
  }
}

export default CompanyInfo;