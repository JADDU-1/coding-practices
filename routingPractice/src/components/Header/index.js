import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo-text">
          <img
            alt="wave"
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          />
          <h1>Wave</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
