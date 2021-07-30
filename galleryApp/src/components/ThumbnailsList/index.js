// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailsList extends Component {
  render() {
    const {eachImage, getImageId, onDisplayImage} = this.props
    const {id, thumbnailAltText, thumbnailUrl} = eachImage

    const displayImage = () => {
      onDisplayImage(id)
    }

    return (
      <li id={id} className="card-container">
        <img
          className={
            getImageId === id ? 'imageWithoutopacity' : 'imageWithopacity'
          }
          onClick={displayImage}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </li>
    )
  }
}

export default ThumbnailsList
