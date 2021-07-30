/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard/index'
import NavBar from '../NavBar/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allEmojisList: [],
      selectedEmojis: [],
      resultCardStatus: false,
      score: 0,
      topScore: 0,
      resultMessage: 'You Lose',
      totalNoOfEmojis: 0,
    }
  }

  componentDidMount() {
    const {emojisList} = this.props
    this.setState({
      allEmojisList: emojisList,
      totalNoOfEmojis: emojisList.length,
    })
  }

  updateMessage = (selectedList, totalNoOfEmojis) => {
    const message =
      selectedList.length === totalNoOfEmojis ? 'You Won' : 'You Lose'

    this.setState({
      resultMessage: message,
      resultCardStatus: true,
    })
  }

  resetTheGame = () => {
    const {topScore, score} = this.state
    const finalTopScore = score > topScore ? score : topScore
    this.setState({
      selectedEmojis: [],
      resultCardStatus: false,
      score: 0,
      resultMessage: 'You Lose',
      topScore: finalTopScore,
    })
  }

  onClickEmoji = id => {
    const {selectedEmojis, score, totalNoOfEmojis} = this.state

    const selectedList = [...selectedEmojis]

    if (!selectedEmojis.includes(id)) {
      selectedList.push(id)
      if (selectedList.length === totalNoOfEmojis) {
        this.updateMessage(selectedList, totalNoOfEmojis)
      }
    } else {
      this.updateMessage(score, totalNoOfEmojis)
    }

    this.setState({score: selectedList.length, selectedEmojis: selectedList})
  }

  shuffledEmojisList = () => {
    const {allEmojisList} = this.state
    return allEmojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {
      resultCardStatus,
      score,
      topScore,
      resultMessage,
      totalNoOfEmojis,
    } = this.state

    return (
      <div className="bg-container">
        <NavBar
          score={score}
          topScore={topScore}
          resultCardStatus={resultCardStatus}
        />
        <div className="inner-container">
          {!resultCardStatus && (
            <ul className="list-container">
              {this.shuffledEmojisList().map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  eachEmoji={eachEmoji}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
          {resultCardStatus && (
            <WinOrLoseCard
              score={score}
              resultMessage={resultMessage}
              totalNoOfEmojis={totalNoOfEmojis}
              resetTheGame={this.resetTheGame}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
