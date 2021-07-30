import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      id,
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatchDetails
    return (
      <div id={id} className="bg-latest-match">
        <div className="first-column">
          <h2>{competingTeam}</h2>
          <h4>{date}</h4>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div className="middle-column">
          <img
            alt="team"
            className="competative-team"
            src={competingTeamLogo}
          />
        </div>
        <div className="last-column">
          <h4>First Innings</h4>
          <p>{firstInnings}</p>
          <h4>Second Innings</h4>
          <p>{secondInnings}</p>
          <h4>Man Of The Match</h4>
          <p>{manOfTheMatch}</p>
          <h4>Umpires</h4>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
