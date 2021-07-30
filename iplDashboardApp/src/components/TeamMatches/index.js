import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

class TeamMatches extends Component {
  constructor(props) {
    super(props)
    this.state = {teamDetails: {}, isLoading: true}
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  createLatestAndRecentMatchDetailsObject = latestMatchDetails => ({
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  })

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedDetails = await response.json()
    console.log(fetchedDetails)
    const convertedData = {
      teamBannerUrl: fetchedDetails.team_banner_url,
      latestMatchDetails: this.createLatestAndRecentMatchDetailsObject(
        fetchedDetails.latest_match_details,
      ),
      recentMatches: fetchedDetails.recent_matches.map(eachMatch =>
        this.createLatestAndRecentMatchDetailsObject(eachMatch),
      ),
    }

    this.setState({teamDetails: convertedData, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`bg-team-matches ${id.toLowerCase()}`}>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <img alt="bannerImageURLs" className="banner" src={teamBannerUrl} />
            <p>Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="matches-list">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
