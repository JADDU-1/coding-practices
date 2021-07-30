import {Component} from 'react'
import './index.css'

class GetQuestion extends Component {
  state = {isHidden: false}

  changeStatus = () => {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }))
  }

  render() {
    const {eachQuestion} = this.props
    const {id, questionText, answerText} = eachQuestion
    const {isHidden} = this.state
    const applyImage = isHidden ? (
      <img
        onClick={this.changeStatus}
        alt="minus"
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      />
    ) : (
      <img
        onClick={this.changeStatus}
        alt="plus"
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      />
    )
    const horizontalLine = isHidden && <hr className="hor" />

    return (
      <div id={id} className="card-container">
        <div className="inner-container">
          <h3>{questionText}</h3>
          {applyImage}
        </div>
        {horizontalLine}
        {isHidden && <p className="para">{answerText}</p>}
      </div>
    )
  }
}

export default GetQuestion
