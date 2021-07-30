import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props
    const {id, name, teamImgURL} = eachTeam
    return (
      <Link className="nav-link" to={`/team-matches/${id}`}>
        <li className="team-card">
          <img alt={name} className="teamIcon" src={teamImgURL} />
          <p className="card-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
