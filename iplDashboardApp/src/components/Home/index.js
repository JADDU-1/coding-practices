import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {teamCardsList: [], isLoading: true}
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchedData = await response.json()
    const {teams} = fetchedData
    const convertedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImgURL: eachItem.team_image_url,
    }))

    this.setState({teamCardsList: convertedData, isLoading: false})
  }

  getTeamCards = () => {
    const {isLoading, teamCardsList} = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <ul className="list-container">
        {teamCardsList.map(eachTeam => (
          <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="img-text">
          <img
            alt="ipl-logo"
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {this.getTeamCards()}
      </div>
    )
  }
}

export default Home
