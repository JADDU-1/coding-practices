import {Component} from 'react'
import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

// Write your code here
class ProjectsSection extends Component {
  renderTheProjects = () =>
    projectsData.map(each => (
      <li key={each.id}>
        <img src={each.imageUrl} alt={each.name} className="project-img" />
        <p className="project-para">{each.name}</p>
      </li>
    ))

  render() {
    return (
      <div className="projects-bg-container">
        <h1 className="project-heading">My work</h1>
        <ul className="project-ul">{this.renderTheProjects()}</ul>
      </div>
    )
  }
}

export default ProjectsSection
