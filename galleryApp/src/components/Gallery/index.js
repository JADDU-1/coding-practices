import {Component} from 'react'
import './index.css'
import ThumbnailsList from '../ThumbnailsList/index'

class Gallery extends Component {
  state = {getImageId: 0}

  onDisplayImage = id => {
    this.setState({getImageId: id})
  }

  render() {
    const {photosData} = this.props
    const {getImageId} = this.state
    const {imageUrl, imageAltText} = photosData[getImageId]

    return (
      <div className="bg-container">
        <div className="inner-container">
          <img className="largeImage" alt={imageAltText} src={imageUrl} />
          <h2>Nature Photography</h2>
          <p>Nature Photography by Rahul</p>
          <ul className="listContainer">
            {photosData.map(eachPhoto => (
              <ThumbnailsList
                getImageId={getImageId}
                key={eachPhoto.id}
                eachImage={eachPhoto}
                onDisplayImage={this.onDisplayImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
