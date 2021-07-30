// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchEngine = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialDestinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = initialDestinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1>Destination Search</h1>
          <div className="search-cotainer">
            <input
              type="search"
              onChange={this.searchEngine}
              value={searchInput}
              placeholder="Search"
              className="inputEl"
            />
            <img
              className="searchIcon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachItem => (
              <DestinationItem key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
