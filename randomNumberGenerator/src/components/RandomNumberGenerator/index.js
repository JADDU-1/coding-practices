// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onCreateNewNumber = () => {
    this.setState({number: Math.floor(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onCreateNewNumber}
            >
              Generate
            </button>
          </div>
          <h1 className="heading">{number}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
