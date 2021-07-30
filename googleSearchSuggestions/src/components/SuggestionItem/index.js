import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {eachSugg, onChangeSearchValue} = this.props
    const {id, suggestion} = eachSugg
    const changeSerch = () => {
      onChangeSearchValue(suggestion)
    }
    return (
      <li id={id} className="item">
        <p className="para">{suggestion}</p>
        <button type="button" className="button" onClick={changeSerch}>
          <img
            alt="arrow"
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          />
        </button>
      </li>
    )
  }
}
export default SuggestionItem
