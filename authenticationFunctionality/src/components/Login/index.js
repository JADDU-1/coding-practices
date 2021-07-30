import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import {Redirect, withRouter} from 'react-router-dom'

class LoginForm extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
  }

  onSubmitSuccess = jwtTkoken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtTkoken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
  }

  gotoHome = async event => {
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
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
        <h1>Please Login</h1>
        <button type="button" onClick={this.gotoHome} className="login-button">
          Login With Sample Creds
        </button>
      </div>
    )
  }
}

export default withRouter(LoginForm)
