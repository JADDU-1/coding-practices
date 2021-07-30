import {Component} from 'react'
import './index.css'

class Filters extends Component {
  changeCategory = event => {
    const {onChangeSelectedCategory} = this.props
    onChangeSelectedCategory(event.target.value)
  }

  changeLevel = event => {
    const {onChangeSelectedDifficulty} = this.props
    onChangeSelectedDifficulty(event.target.value)
  }

  render() {
    const {categoryDataList, levelsDataList} = this.props

    return (
      <div className="filter-container">
        <div className="selector-container">
          <label className="label-text" htmlFor="language">
            LANGUAGE
          </label>
          <br />
          <select
            className="selector-styles"
            id="language"
            onChange={this.changeCategory}
          >
            {categoryDataList.map(eachItem => (
              <option
                key={eachItem.id}
                id={eachItem.id}
                value={eachItem.language}
              >
                {eachItem.language}
              </option>
            ))}
          </select>
        </div>
        <div className="selector-container">
          <label className="label-text" htmlFor="level">
            DIFFICULT LEVEL
          </label>
          <br />
          <select
            className="selector-styles"
            id="level"
            onChange={this.changeLevel}
          >
            {levelsDataList.map(eachItem => (
              <option key={eachItem.id} id={eachItem.id} value={eachItem.level}>
                {eachItem.level}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
