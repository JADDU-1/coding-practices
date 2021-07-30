import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {userId: 0}

  onNext = () => {
    const {reviewsData} = this.props
    const {userId} = this.state
    console.log(reviewsData.length)

    if (userId < reviewsData.length - 1) {
      this.setState(prevState => ({userId: prevState.userId + 1}))
    }
  }

  onPrevious = () => {
    const {userId} = this.state
    console.log(userId)
    if (userId > 0) {
      this.setState(prevState => ({userId: prevState.userId - 1}))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {userId} = this.state
    const {imgUrl, username, companyName, description} = reviewsData[userId]

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="inner-container">
          <button
            className="buttons"
            type="button"
            testid="leftArrow"
            onClick={this.onPrevious}
          >
            <img
              alt="leftArrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <div className="detailsContainer">
            <img alt={`${username}-avatar`} src={imgUrl} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            className="buttons"
            type="button"
            testid="rightArrow"
            onClick={this.onNext}
          >
            <img
              alt="rightArrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
