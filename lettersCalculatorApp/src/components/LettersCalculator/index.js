import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeText = event => {
    const string = event.target.value
    this.setState({count: string.length})
  }

  reset = () => {}

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1>Calculate the Letters you enter</h1>
          <div>
            <label>
              Enter the phrase <br />
              <input
                id="name"
                className="inputElement"
                placeholder="Enter the phrase"
                onChange={this.onChangeText}
                type="text"
              />
            </label>
          </div>
          <div className="result-container">
            <button className="resultButton" type="button" onClick={this.reset}>
              No.of letters: {count}
            </button>
          </div>
        </div>
        <img
          className="image"
          alt="calculateImage"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
