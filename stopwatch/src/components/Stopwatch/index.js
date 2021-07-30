import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  onstartTimer = () => {
    this.timerID = setInterval(this.updateTimer, 1000)
  }

  updateTimer = () => {
    const {counter} = this.state
    this.setState({
      counter: counter + 1,
    })
  }

  onStopTimer = () => {
    clearInterval(this.timerID)
  }

  onResetTimer = () => {
    clearInterval(this.timerID)
    this.setState({
      counter: 0,
    })
  }

  getMinutes = () => {
    const {counter} = this.state

    const minutes = Math.floor(counter / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  getSeconds = () => {
    const {counter} = this.state
    if (counter < 10) {
      return `0${counter}`
    }
    return counter
  }

  render() {
    const time = `${this.getMinutes()}:${this.getSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="inner-container">
          <div className="time-text">
            <img
              alt="timerImage"
              className="timerImage"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <span>Timer</span>
          </div>
          <h1 testid="timer">{time}</h1>
          <button
            type="button"
            className="start button"
            onClick={this.onstartTimer}
          >
            Start
          </button>
          <button
            type="button"
            className="stop button"
            onClick={this.onStopTimer}
          >
            Stop
          </button>
          <button
            type="button"
            className="reset button"
            onClick={this.onResetTimer}
          >
            Reset
          </button>
        </div>
        {/* <img
          alt="timerImageLarge"
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-sm-bg.png"
        /> */}
      </div>
    )
  }
}

export default Stopwatch
