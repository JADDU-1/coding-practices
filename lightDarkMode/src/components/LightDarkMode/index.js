import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {mode: true}

  changeMode = () => {
    this.setState(prevState => ({
      mode: !prevState.mode,
    }))
  }

  render() {
    const {mode} = this.state

    return (
      <div className="bg-container">
        <div className={mode ? 'darkMode' : 'lightMode'}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.changeMode}>
            {mode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
