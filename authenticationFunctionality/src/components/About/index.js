import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>About Route</h1>
        <LogoutButton />
      </div>
    )
  }
}

export default About
