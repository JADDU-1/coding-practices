import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErrorMessage: '',
    lastNameErrorMessage: '',
    hideShowResult: true,
    errorMessage: 'Required',
  }

  onChangeFirstName = event => {
    const {errorMessage} = this.state
    if (event.target.value === '') {
      this.setState({firstNameErrorMessage: errorMessage})
    } else {
      this.setState({firstName: event.target.value})
    }
  }

  onChangeLastName = event => {
    const {errorMessage} = this.state
    if (event.target.value === '') {
      this.setState({lastNameErrorMessage: errorMessage})
    } else {
      this.setState({lastName: event.target.value})
    }
  }

  onclickSubmitAnotherResponse = () => {
    this.setState({firstName: '', lastName: '', hideShowResult: true})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName, errorMessage} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({
        firstNameErrorMessage: errorMessage,
        lastNameErrorMessage: errorMessage,
      })
    } else if (firstName === '') {
      this.setState({firstNameErrorMessage: errorMessage})
    } else if (lastName === '') {
      this.setState({lastNameErrorMessage: errorMessage})
    } else {
      this.setState({
        firstNameErrorMessage: '',
        lastNameErrorMessage: '',
        hideShowResult: false,
      })
    }
  }

  render() {
    const {
      firstNameErrorMessage,
      lastNameErrorMessage,
      hideShowResult,
    } = this.state
    return (
      <div className="bg-login-page-container">
        <h1 className="registration-heading">Registration</h1>
        {hideShowResult ? (
          <form className="login-card" onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label className="label-name" htmlFor="firstName">
                FIRST NAME
              </label>
              <input
                type="text"
                className={`input-element ${
                  firstNameErrorMessage !== '' && 'error-styles'
                }`}
                id="firstName"
                placeholder="First name"
                onBlur={this.onChangeFirstName}
              />
              <p className="error-message">{firstNameErrorMessage}</p>
            </div>
            <div className="input-container">
              <label className="label-name" htmlFor="lastName">
                LAST NAME
              </label>
              <input
                type="password"
                className={`input-element ${
                  lastNameErrorMessage !== '' && 'error-styles'
                }`}
                id="lastName"
                placeholder="Last name"
                onBlur={this.onChangeLastName}
              />
              <p className="error-message">{lastNameErrorMessage}</p>
            </div>
            <div className="button-container">
              <button className="login-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="login-card">
            <img
              alt="success"
              className="success-image"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            />
            <p>Submitted Successfully</p>
            <button
              type="button"
              className="login-button"
              onClick={this.onclickSubmitAnotherResponse}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
