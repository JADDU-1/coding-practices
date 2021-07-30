import {Component} from 'react'
import './index.css'

class QuestionOption extends Component {
  render() {
    const {eachOption, selectedOptionName, onSelected} = this.props
    const {id, optionTitle, description} = eachOption
    const onAction = () => {
      onSelected(eachOption)
    }
    const cardClassname = selectedOptionName === id ? 'selected' : 'each-option'

    const imageElement =
      selectedOptionName === id ? (
        <img
          className="cup-image"
          alt="white cup"
          src="https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png"
        />
      ) : (
        <img
          className="cup-image"
          alt="blue cup"
          src="https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png"
        />
      )

    const pElementText = selectedOptionName === id ? 'selectedPara' : 'para'

    return (
      <li id={id}>
        <button className={cardClassname} onClick={onAction} type="button">
          <div className="img-text">
            <h3>{optionTitle}</h3>
            {imageElement}
          </div>

          <span className={pElementText}>{description}</span>
        </button>
      </li>
    )
  }
}

export default QuestionOption
