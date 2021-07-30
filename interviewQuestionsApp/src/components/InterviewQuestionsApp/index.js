import {Component} from 'react'
import './index.css'
import Filters from '../Filters/index'
import InterviewQuestion from '../InterviewQuestion/index'

class InterviewQuestionsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionsList: [],
      levelsDataList: [],
      categoryDataList: [],
      selectedCategory: 'ALL',
      selectedDifficulty: 'ALL',
    }
  }

  componentDidMount() {
    const {questionsData, categoryData, levelsData} = this.props
    this.setState({
      questionsList: questionsData,
      levelsDataList: levelsData,
      categoryDataList: categoryData,
    })
  }

  getUpdatedList = () => {
    const {questionsList, selectedCategory, selectedDifficulty} = this.state

    let filteredData = ''

    if (selectedCategory === 'ALL' && selectedDifficulty === 'ALL') {
      filteredData = questionsList
    } else if (selectedCategory !== 'ALL' && selectedDifficulty === 'ALL') {
      filteredData = questionsList.filter(
        eachItem => eachItem.language === selectedCategory,
      )
    } else if (selectedCategory === 'ALL' && selectedDifficulty !== 'ALL') {
      filteredData = questionsList.filter(
        eachItem => eachItem.difficultyLevel === selectedDifficulty,
      )
    } else {
      filteredData = questionsList.filter(
        eachItem =>
          eachItem.difficultyLevel === selectedDifficulty &&
          eachItem.language === selectedCategory,
      )
    }

    return filteredData
  }

  onChangeSelectedCategory = category => {
    this.setState({selectedCategory: category})
  }

  onChangeSelectedDifficulty = level => {
    this.setState({selectedDifficulty: level})
  }

  render() {
    const {categoryDataList, levelsDataList} = this.state

    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">30 seconds of interviews</h1>
          <img
            alt="interview"
            className="top-image"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
          />
        </div>
        <div className="inner-container">
          <Filters
            categoryDataList={categoryDataList}
            levelsDataList={levelsDataList}
            onChangeSelectedCategory={this.onChangeSelectedCategory}
            onChangeSelectedDifficulty={this.onChangeSelectedDifficulty}
          />
          <ul className="questions-list">
            {this.getUpdatedList().map(eachItem => (
              <InterviewQuestion
                key={eachItem.id}
                id={eachItem.id}
                eachItem={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
