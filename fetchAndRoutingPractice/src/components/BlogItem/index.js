import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlockItem extends Component {
  render() {
    const {eachItem} = this.props
    const {id, imageUrl, title, avatarUrl, author, topic} = eachItem
    return (
      <Link to={`/blogs/${id}`} className="item-link">
        <li id={id} className="list-item">
          <img alt={title} className="dataImage" src={imageUrl} />
          <div>
            <p>{topic}</p>
            <h2>{title}</h2>
            <div className="author-details">
              <img className="author-pic" src={avatarUrl} alt={author} />
              <p className="details-author-name">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlockItem
