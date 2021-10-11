// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog">
      <div className="post-date-container">
        <h1 className="post-heading">{title}</h1>
        <p className="post-time">{publishedDate}</p>
      </div>
      <p className="post-time">{description}</p>
    </li>
  )
}

export default BlogItem
