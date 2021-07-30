import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, resultCardStatus} = this.props

    return (
      <div className="nav-container">
        <div className="text-icon">
          <img
            alt=""
            className="image-icon"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1>Emoji Game</h1>
        </div>
        {!resultCardStatus && (
          <div className="score-container">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    )
  }
}

export default NavBar
