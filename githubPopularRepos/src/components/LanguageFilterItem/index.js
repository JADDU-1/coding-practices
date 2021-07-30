import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  render() {
    const {eachButton, onChangeFilter, selectedFilter} = this.props
    const {id, language} = eachButton
    const onSelectButton = () => {
      onChangeFilter(id)
    }
    return (
      <li className="each-button">
        <button
          type="button"
          onClick={onSelectButton}
          className={`bg-filter-container  ${
            selectedFilter === id && 'filter-container'
          }`}
        >
          {language}
        </button>
      </li>
    )
  }
}

export default LanguageFilterItem
