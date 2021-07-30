import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {score, resultMessage, totalNoOfEmojis, resetTheGame} = this.props
    const aleText = resultMessage === 'You Won' ? 'won image' : 'lose image'
    const imgUrl =
      resultMessage === 'You Won'
        ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    return (
      <div className="result-container">
        <div className="result-details">
          <h1>{resultMessage}</h1>
          <p>{resultMessage === 'You Won' ? 'Best Score' : 'Score'}</p>
          <p className="score-board">
            {score}/{totalNoOfEmojis}
          </p>
          <button type="button" className="paly-again" onClick={resetTheGame}>
            Play Again
          </button>
        </div>

        <div>
          <img className="resultImage" alt={aleText} src={imgUrl} />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
