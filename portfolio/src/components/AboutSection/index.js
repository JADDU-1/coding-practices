import {Component} from 'react'
import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

// Write your code here
class AboutSection extends Component {
  renderEducationData = () =>
    educationData.map(each => (
      <li key={each.id}>
        <div className="img-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/list-icon-img.png"
            alt="list-icon"
            className="list-icon"
          />
          <p className="about-para">{each.qualification}</p>
        </div>
        <p>{each.qualificationSource}</p>
      </li>
    ))

  renderTheSkillsList = () =>
    skillsData.map(each => (
      <li key={each.id} className="skills-list">
        <p>{each.name}</p>
      </li>
    ))

  render() {
    return (
      <div className="about-bg-container">
        <h1 className="about-main-heading">About</h1>
        <p className="about-description">
          I started my journey in the world of computers from a young age, now i
          am 21 years old pushing my computer science major at Santa Clara
          University, USA. Web development is my center of interest.
        </p>
        <div className="graduate-skills-container">
          <div className="first-container">
            <h1 className="about-heading">Education</h1>
            <ul className="about-ul">{this.renderEducationData()}</ul>
          </div>
          <div className="first-container">
            <h1 className="about-heading">Skills</h1>
            <ul className="about-ul-skills">{this.renderTheSkillsList()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection
