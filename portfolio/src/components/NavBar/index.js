// Write your code here
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderNavItemsList = () => {
    const {navBarItems, changeTheSection, activeSectionId} = this.props

    return navBarItems.map(each => {
      const updateTheBodyAndList = () => changeTheSection(each.name)

      const activeSec = activeSectionId === each.name ? 'highLite' : ''
      return (
        <li
          key={each.name}
          className={`list-item ${activeSec}`}
          onClick={updateTheBodyAndList}
        >
          <img src={each.iconUrl} alt={each.name} className="nav-icon" />
          <p className="icon-name">{each.name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="nav-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
          alt="profile"
          className="profile-image"
        />
        <div className="navBar-ul-container">{this.renderNavItemsList()}</div>
      </ul>
    )
  }
}

export default NavBar
