import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {eachMatch} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = eachMatch
    return (
      <li className="bg-match-card">
        <img
          alt={competingTeam}
          src={competingTeamLogo}
          className="team-logo"
        />
        <h3 className="competative-team-heading">{competingTeam}</h3>
        <p className="result-text">{result}</p>
        <p className={matchStatus === 'Won' ? 'won' : 'lost'}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
