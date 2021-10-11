import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {
      username: userName,
      password,
    }
    // const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    console.log(options)
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = e => {
    this.setState({userName: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  getRenderUserNameEl = () => (
    <label htmlFor="userName" className="inputElDecor">
      USERNAME
      <br />
      <input
        id="userName"
        type="text"
        className="inputEl"
        onChange={this.onChangeUsername}
      />
    </label>
  )

  getRenderPasswordEl = () => (
    <label htmlFor="userPassword" className="inputElDecor">
      PASSWORD
      <br />
      <input
        id="userPassword"
        type="text"
        className="inputEl"
        onChange={this.onChangePassword}
      />
    </label>
  )

  render() {
    return (
      <div className="loginMainCon">
        <div className="loginImgCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="loginImg"
          />
        </div>
        <div className="formMainCon">
          <form className="formElCon" onSubmit={this.onSubmitForm}>
            <div className="formImgCon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="formImg"
              />
            </div>
            {this.getRenderUserNameEl()}
            {this.getRenderPasswordEl()}
            <div className="loginCon">
              <button type="submit" className="loginBtn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
