import {Component} from 'react'
import './index.css'
import Header from '../Header/index'

class Home extends Component {
  render() {
    return (
      <div className="bg-home">
        <Header />
        <div className="home-page-inner-container">
          <div className="text-container">
            <h1 className="home-page-heading">Clothes That Get YOU Noticed</h1>
            <p className="paragraph">
              Fashion is part of the daily air and it does not quite
              help.Fashion is a part od daily air and it does not quite
              help.Fashion is a part od daily air and it does not quite
              help.Fashion is a part od daily air and it does not quite
              help.Fashion is a part od daily air and it does not quite
              help.Fashion is a part od daily air and it does not quite
              help.Fashion is a part od daily air and it does not quite
              help.Fashion is a part od daily air and it does not quite
              help.Fashion is a part od daily air and it does not quite help.
            </p>
            <button type="button" className="shop-now">
              Shop Now
            </button>
          </div>
          <div className="home-page-image">
            <img
              alt="clothes that get you noticed"
              className="man-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
