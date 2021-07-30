import {Component} from 'react'
import './index.css'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion/index'

class CoffeePlanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coffeePlannerListItems: [],
      showResult: false,
      noOfQuestionsSelectedCount: [],
      totalQuestionsCount: 0,
    }
  }

  componentDidMount() {
    const {coffeePlannerList} = this.props

    this.setState({
      coffeePlannerListItems: coffeePlannerList,
      totalQuestionsCount: coffeePlannerList.length,
    })
  }

  selectedQuestions = (questionName, option) => {
    const {noOfQuestionsSelectedCount} = this.state
    const uniqueData = []
    const object = {
      name: questionName,
      title: option.optionTitle,
    }
    if (noOfQuestionsSelectedCount.length > 0) {
      const filtered = noOfQuestionsSelectedCount.filter(
        eachItem => eachItem.name !== questionName,
      )
      uniqueData.push(...filtered)
      uniqueData.push(object)
    } else {
      uniqueData.push(object)
    }
    this.setState({
      noOfQuestionsSelectedCount: uniqueData,
      showResult: false,
    })
  }

  getUpdatedMessage = () => {
    const {noOfQuestionsSelectedCount, totalQuestionsCount} = this.state
    const finalData = {}

    noOfQuestionsSelectedCount.forEach(item => {
      finalData[item.name] = item.title
    })

    const message =
      noOfQuestionsSelectedCount.length === totalQuestionsCount ? (
        <p className="result-container">
          I Drink my coffee as
          <span className="selected-value">{` ${finalData.DRINK_TYPE}`}</span>,
          with a
          <span className="selected-value">{` ${finalData.COFFEE_TYPE} `}</span>
          type of bean.
          <span className="selected-value">{` ${finalData.QUANTITY} `}</span>
          of
          <span className="selected-value">{` ${finalData.GRIND_TYPE} `}</span>
          ground, send to me
          <span className="selected-value">{` ${finalData.DELIVER_TYPE} `}</span>
        </p>
      ) : (
        <span className="result-container">
          Kindly select options for all the questions
        </span>
      )

    return message
  }

  changeStatus = () => {
    this.setState(prevState => {
      const {showResult} = prevState
      return {showResult: !showResult}
    })

    this.getUpdatedMessage()
  }

  render() {
    const {coffeePlannerListItems, showResult} = this.state
    return (
      <div className="bg-container">
        <div className="top-container">
          <div className="top-text">
            <h1>Create a plan</h1>
            <p>
              We offer an assortment of the best artesian coffees from the globe
              delivered fresh to the door create your plan with this
            </p>
          </div>
        </div>

        <ul className="list-container">
          {coffeePlannerListItems.map(eachQuestion => (
            <CoffeePlannerQuestion
              key={eachQuestion.id}
              eachQuestion={eachQuestion}
              selectedQuestions={this.selectedQuestions}
            />
          ))}
        </ul>
        <div className="button-container">
          <button type="button" onClick={this.changeStatus} className="button">
            Create my plan
          </button>
        </div>
        <div className="result-outer-container">
          {showResult && this.getUpdatedMessage()}
        </div>
      </div>
    )
  }
}

export default CoffeePlanner
