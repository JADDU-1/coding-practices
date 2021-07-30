import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {eachEmoji, onClickEmoji} = this.props
    const {id, emojiName, emojiUrl} = eachEmoji
    const onSelected = () => {
      onClickEmoji(id)
    }
    return (
      <li id={id} className="each-card">
        <button type="button" className="button" onClick={onSelected}>
          <img className="each-emoji" alt={emojiName} src={emojiUrl} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
