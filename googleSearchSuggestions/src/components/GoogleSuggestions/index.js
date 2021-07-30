import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchEngine = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeSearchValue = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachsuggestion =>
      eachsuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="google"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="inner-container">
          <div className="search-container">
            <img
              className="search-Icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              className="inputElement"
              type="search"
              onChange={this.searchEngine}
              placeholder="search"
              value={searchInput}
            />
          </div>
          <ul className="list">
            {searchResults.map(item => (
              <SuggestionItem
                key={item.id}
                eachSugg={item}
                onChangeSearchValue={this.onChangeSearchValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
