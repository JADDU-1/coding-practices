import {Component} from 'react'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="bg-about">
        <img
          alt="about"
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        />
        <h1>About</h1>
        <p>I love to create i am a frontend developer</p>
      </div>
    )
  }
}

export default About
