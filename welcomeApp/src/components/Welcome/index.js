import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLogin: false}

  login = () => {
    // const {isLogin} = this.state

    this.setState(prevState => ({
      isLogin: !prevState.isLogin,
    }))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          {isLogin ? (
            <button type="button" onClick={this.login}>
              Subscribed
            </button>
          ) : (
            <button type="button" onClick={this.login}>
              Subscribe
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
