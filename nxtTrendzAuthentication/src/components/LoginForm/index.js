import {Component} from 'react'
import './index.css'

class LoginPage extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMessage: data.error_msg})
    }
  }

  render() {
    const {errorMessage} = this.state
    return (
      <div className="bg-login-page-container">
        <img
          className="logo"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <form className="login-card" onSubmit={this.onSubmitForm}>
          <img
            className="card-image"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <div className="input-container">
            <label className="labe-name" htmlFor="userName">
              USERNAME
            </label>
            <input
              type="text"
              className="input-element"
              id="userName"
              placeholder="Username"
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="input-container">
            <label className="labe-name" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              className="input-element"
              id="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </div>
          <div className="button-container">
            <button className="login-button" type="submit">
              Login
            </button>
            <p className="error-message">{errorMessage}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginPage
