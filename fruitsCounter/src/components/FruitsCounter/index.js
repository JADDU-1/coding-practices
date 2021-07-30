import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onClickMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onClickBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1>
            Bob ate <span className="text-color">{mango}</span> mangoes
            <span className="text-color"> {banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit">
              <img
                className="image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              />
              <button
                onClick={this.onClickMango}
                className="buttons"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                className="image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                onClick={this.onClickBanana}
                className="buttons"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
