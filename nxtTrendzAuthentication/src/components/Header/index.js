import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="image-container">
          <img
            className="header-image"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
        </div>
        <ul className="options">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <button className="logout-button" type="button">
            Logout
          </button>
        </ul>
      </div>
    )
  }
}

export default Header
