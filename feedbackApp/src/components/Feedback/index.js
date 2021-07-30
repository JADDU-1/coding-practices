import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedBackStatus: false}

  onFeedback = () => {
    this.setState({feedBackStatus: true})
  }

  render() {
    const {feedbackData} = this.props
    const {emojis, loveEmojiUrl} = feedbackData
    const {feedBackStatus} = this.state

    return (
      <div className="bg-container">
        {feedBackStatus ? (
          <div className="inner-container">
            <img className="love" src={loveEmojiUrl} alt="loveEmoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        ) : (
          <div className="inner-container">
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
            <div className="items">
              {emojis.map(eachItem => (
                <GetEmojie
                  onFeedback={this.onFeedback}
                  key={eachItem.id}
                  eachItem={eachItem}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback

const GetEmojie = props => {
  const {eachItem, onFeedback} = props
  const {id, name, imageUrl} = eachItem
  return (
    <div id={id} className="item">
      <img onClick={onFeedback} className="image" alt={name} src={imageUrl} />
      <p>{name}</p>
    </div>
  )
}
