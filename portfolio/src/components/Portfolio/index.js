import {Component} from 'react'
import SocialMediaSection from '../SocialMediaSection'
import NavBar from '../NavBar'
import HomeSection from '../HomeSection'
import AboutSection from '../AboutSection'
import ContactSection from '../ContactSection'
import ProjectsSection from '../ProjectsSection'
import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

// Write your code here

class Portfolio extends Component {
  state = {activeSection: navBarItems[0].name}

  changeTheSection = value => {
    this.setState({activeSection: value})
  }

  renderTheTheSection = () => {
    const {activeSection} = this.state
    switch (activeSection) {
      case navBarItems[0].name:
        return <HomeSection />
      case navBarItems[1].name:
        return <AboutSection />
      case navBarItems[2].name:
        return <ProjectsSection />
      case navBarItems[3].name:
        return <ContactSection />
      default:
        return null
    }
  }

  render() {
    const {activeSection} = this.state
    return (
      <div className="portfolio-card-container">
        <NavBar
          navBarItems={navBarItems}
          changeTheSection={this.changeTheSection}
          activeSectionId={activeSection}
        />
        <div className="body-container">
          {this.renderTheTheSection()}
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default Portfolio
