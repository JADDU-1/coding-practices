import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {
    commentsList,
    toggleLikeStatus,
    toggleLikeButton,
    deleteComment,
  } = props

  const {id, name, comment, isLiked} = commentsList

  const profile = name[0].toUpperCase()

  const liked =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const unliked =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const img = isLiked ? liked : unliked

  const onLikedORDislike = () => {
    toggleLikeStatus(id)
  }
  const colorChange = isLiked ? 'blue' : 'like-para'

  const likeButton = () => {
    toggleLikeButton(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="li-ele">
      <div className="align-round">
        <div>
          <div className="round">{profile}</div>
        </div>

        <div className="align-div">
          <div className="comment-card">
            <h1 className="heading2">{name}</h1>
            <p className="para5"> {formatDistanceToNow(new Date())}</p>
          </div>
          <p className="paragraph">{comment}</p>
        </div>
      </div>
      <div className="down-div">
        <img
          src={img}
          className="like-image"
          alt="like"
          onClick={onLikedORDislike}
        />
        <div className="like-delete-container">
          <div>
            <button className={colorChange} onClick={likeButton} type="button">
              Like
            </button>
          </div>

          <button
            className="delete-container"
            type="button"
            onClick={onDelete}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default CommentItem
