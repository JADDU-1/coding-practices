import {Component} from 'react'
import './index.css'
import QuestionOption from '../QuestionOption/index'

class CoffeePlannerQuestion extends Component {
  state = {selectedOptionName: ''}

  onSelected = eachOption => {
    const {eachQuestion, selectedQuestions} = this.props
    this.setState({selectedOptionName: eachOption.id})
    selectedQuestions(eachQuestion.questionType, eachOption)
  }

  render() {
    const {eachQuestion} = this.props
    const {selectedOptionName} = this.state
    const {id, questionTitle, optionsList} = eachQuestion

    return (
      <li id={id}>
        <h2>{questionTitle}</h2>
        <ul className="options-container">
          {optionsList.map(eachOption => (
            <QuestionOption
              key={eachOption.id}
              eachOption={eachOption}
              selectedOptionName={selectedOptionName}
              onSelected={this.onSelected}
            />
          ))}
        </ul>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
