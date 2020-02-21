import React, { Component } from 'react';

class CompanyInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companyName: 'CBD Good',
      personsName: 'Mark',
      email: 'mark@test.com',
      phone: '970-405',
      companyEntered: false,
      touched: {
        personsName: false,
        email: false,
        phone: false
      }
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

  validityCheck = (personsName, email, phone) => {
    return {
      personsName: personsName.length === 0,
      email: email.length === 0,
      phone: phone.length === 0
    }
  }

  handleBlur = (field) => {
    this.setState({ touched: { ...this.state.touched, [field]: true } })
  }
  
  render() {

    const errors = this.validityCheck(this.state.personsName, this.state.email, this.state.phone)
    const isEnabled = !Object.keys(errors).some(input => errors[input])

    const shouldMarkError = (field) => {
      const hasError = errors[field]
      const shouldShow = this.state.touched[field]

      return hasError ? shouldShow : false;
    }


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
            onBlur={ () => this.handleBlur('personsName') }
            className={ shouldMarkError('personsName') ? "error" : "" }
          />
          <input 
            type="email" 
            placeholder="Email"
            name="email"
            value={ this.state.email}
            onChange={ this.handleChange }
            onBlur={ () => this.handleBlur('email') }
            className={ shouldMarkError('email') ? "error" : "" }
          />
          <input 
            type="tel" 
            placeholder="Phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={ this.state.phone}
            onChange={ this.handleChange }
            onBlur={ () => this.handleBlur('phone') }
            className={ shouldMarkError('phone') ? "error" : "" }
          /> 
          <button disabled={ !isEnabled } onClick={ this.handleClick }>SUBMIT</button>
        </form>
      </section>
  }
}

export default CompanyInfo;