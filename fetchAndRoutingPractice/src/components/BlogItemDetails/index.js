import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {blogDetails: {}, isLoading: true}
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const updated = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogDetails: updated, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogDetails} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogDetails

    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
