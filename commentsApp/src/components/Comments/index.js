import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const basicUserDetails = [
  {
    name: '',
    comment: '',
    id: uuidv4(),
    isLiked: false,
  },
]

class Comments extends Component {
  state = {
    commentsList: basicUserDetails,
    name: '',
    comment: '',
    count: 0,
  }

  updateNameToState = event => {
    this.setState({name: event.target.value})
  }

  updateTextAreaToState = event => {
    this.setState({comment: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {name, comment} = this.state

    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
      }

      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        count: prevState.count + 1,
        name: '',
        comment: '',
      }))
    }
    return null
  }

  test = () => {
    const {commentsList} = this.state

    if (commentsList.length > 1) {
      return true
    }
    return false
  }

  toggleLikeStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  toggleLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state

    const filteredComments = commentsList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentsList: filteredComments})

    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {commentsList, count, name, comment} = this.state

    const slicedCommentsList = commentsList.slice(1)

    return (
      <div className="comments-container">
        <h1 className="comments-heading">Comments</h1>
        <div className="upper-section">
          <div className="content-card">
            <p className="comments-para">
              Say something about 4.0 Technologies
            </p>
            <form className="comments-form">
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
                onChange={this.updateNameToState}
                value={name}
              />
              <br />
              <br />
              <textarea
                cols="30"
                rows="5"
                placeholder="Your Comment"
                className="name-input"
                onChange={this.updateTextAreaToState}
                value={comment}
              />
            </form>
            <button type="submit" className="btn" onClick={this.onSubmit}>
              Add Comment
            </button>
          </div>
          <div className="img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img-edits"
            />
          </div>
        </div>
        <hr className="line-ele" />
        <div className="lower-section">
          <span className="span-ele">{count}</span>
          <p className="heading1">Comments</p>
        </div>
        <ul className="ul-ele">
          {slicedCommentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentsList={eachComment}
              toggleLikeStatus={this.toggleLikeStatus}
              toggleLikeButton={this.toggleLikeButton}
              deleteComment={this.deleteComment}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
