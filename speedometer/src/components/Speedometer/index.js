import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAcclerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          className="image"
          alt="speedImage"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <div className="innerContainer">
          <h1>Speed is {speed}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <button className="button1" type="button" onClick={this.onAcclerate}>
            Accelerate
          </button>
          <button className="button" type="button" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
