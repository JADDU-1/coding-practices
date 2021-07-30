import {Component} from 'react'
import './index.css'

class Filters extends Component {
  state = {status: false}

  onChangeStatus = () => {
    const {status} = this.state
    this.setState({status: !status})
  }

  getButton = () => {
    const {status} = this.state
    const button = status ? (
      <button
        type="button"
        className="answerButton"
        onClick={this.onChangeStatus}
      >
        <span className="buttonText">Hide</span>
        <img
          alt="up arrow"
          src="https://assets.ccbp.in/frontend/react-js/up-arrow.png"
        />
      </button>
    ) : (
      <button
        type="button"
        className="answerButton"
        onClick={this.onChangeStatus}
      >
        <span className="buttonText">Show</span>
        <img
          alt="down arrow"
          src="https://assets.ccbp.in/frontend/react-js/down-arrow.png"
        />
      </button>
    )
    return button
  }

  render() {
    const {eachItem} = this.props
    const {status} = this.state
    const {id, questionText, answerText, language, difficultyLevel} = eachItem
    return (
      <li id={id} className="list-item">
        <span className={difficultyLevel.toLowerCase()}>{difficultyLevel}</span>
        <span className={language.toLowerCase()}>{language}</span>
        <h2>{questionText}</h2>
        {this.getButton()}
        {status && <p>{answerText}</p>}
      </li>
    )
  }
}

export default Filters
