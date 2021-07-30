import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import LanguageFilterItem from '../LanguageFilterItem/index'
import RepositoryItem from '../RepositoryItem/index'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  constructor(props) {
    super(props)
    this.state = {reposList: [], isLoading: true, selectedFilter: 'ALL'}
  }

  componentDidMount = () => {
    this.getRepoData(languageFiltersData[0].id)
  }

  getRepoData = async selectedId => {
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${selectedId}`,
    )

    const fetchedData = await response.json()
    const fetchedrepoList = fetchedData.popular_repos

    const convertedData = fetchedrepoList.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      issuesCount: eachItem.issues_count,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
    }))

    this.setState({reposList: convertedData, isLoading: false})
  }

  onChangeFilter = selectedId => {
    this.setState({selectedFilter: selectedId, isLoading: true})
    this.getRepoData(selectedId)
  }

  getDisplayResults = () => {
    const {reposList, isLoading} = this.state

    return isLoading ? (
      <div testid="loader">
        <Loader type="Rings" color="#0284c7" height={80} width={80} />
      </div>
    ) : (
      <ul className="list-of-items">
        {reposList.map(eachItem => (
          <RepositoryItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    )
  }

  getButtons = () => {
    const {selectedFilter} = this.state
    return (
      <ul className="nav-menu">
        {languageFiltersData.map(eachButton => (
          <LanguageFilterItem
            key={eachButton.id}
            eachButton={eachButton}
            onChangeFilter={this.onChangeFilter}
            selectedFilter={selectedFilter}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        {this.getButtons()}
        {this.getDisplayResults()}
      </div>
    )
  }
}

export default GithubPopularRepos
