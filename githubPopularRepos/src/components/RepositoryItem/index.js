import {Component} from 'react'
import './index.css'

class RepositoryItem extends Component {
  render() {
    const {eachItem} = this.props
    const {id, name, issuesCount, forksCount, starsCount, avatarUrl} = eachItem

    return (
      <li id={id} className="bg-repo">
        <img alt={name} className="repo-image" src={avatarUrl} />
        <h1 className="heading-name">{name}</h1>
        <div className="img-text">
          <img
            alt="stars"
            className="icons"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          />
          <p>{starsCount} stars</p>
        </div>
        <div className="img-text">
          <img
            alt="forks"
            className="icons"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          />
          <p>{forksCount} forks</p>
        </div>
        <div className="img-text">
          <img
            alt="open-issues"
            className="icons"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          />
          <p>{issuesCount} open issues</p>
        </div>
      </li>
    )
  }
}

export default RepositoryItem
