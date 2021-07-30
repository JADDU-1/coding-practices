import './index.css'
import BlockList from '../BlogList/index'

const Home = () => (
  <div className="home-container">
    <div className="profile-section">
      <img
        alt="profile pic"
        className="icon"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      />
      <h3>Wade Warren</h3>
      <p>Software Developer at UK</p>
    </div>
    <BlockList />
  </div>
)

export default Home
