import {Component} from 'react'
import './index.css'

class AgeCalculator extends Component {
  state = {age: '', status: false, calculatedAge: ''}

  onChangeInputValue = event => {
    this.setState({age: event.target.value})
  }

  calculateAge = () => {
    const {age} = this.state

    const convertedToNum = parseInt(age, 10)
    if (!convertedToNum.isNaN && convertedToNum < new Date().getFullYear()) {
      const presentAge = new Date().getFullYear() - convertedToNum
      this.setState({status: true, calculatedAge: presentAge})
    } else {
      this.setState({status: false, calculatedAge: ''})
    }
  }

  getMessage = () => {
    const {age, status, calculatedAge} = this.state
    let element
    if (age.length > 0) {
      if (status === true) {
        if (calculatedAge === 1) {
          element = <p>You are {calculatedAge} year by the end of 2021</p>
        } else {
          element = <p>You are {calculatedAge} years old by the end of 2021</p>
        }
      } else {
        element = <p>Enter the year that you are Born</p>
      }
    } else {
      element = <p> </p>
    }
    return element
  }

  render() {
    // const {age, status, calculatedAge} = this.state
    // const getMessage =
    //   status && age.length > 0 ? (
    //     <p>You are x years {calculatedAge} by the end of 2021</p>
    //   ) : (
    //     <p>Enter the year that you born</p>
    //   )

    return (
      <div className="bg-container">
        <div className="innerContainer">
          <h1>Age Calculator</h1>
          <input
            type="text"
            onChange={this.onChangeInputValue}
            placeholder="Enter the year that you are born"
          />
          {this.getMessage}
          <button type="button" onClick={this.calculateAge} className="button">
            Calculate
          </button>
        </div>
        <img
          alt="people"
          src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
        />
      </div>
    )
  }
}

export default AgeCalculator
