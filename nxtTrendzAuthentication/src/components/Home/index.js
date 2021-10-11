import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="mainContainer">
    <Header />
    <div className="homeContainer">
      <div className="homeContentCon">
        <h1 className="mainHeading">Clothes That Get YOU Noticed</h1>
        <p className="description">Fashion is the daily air and it does not</p>
        <div className="shopNowBtnCon">
          <button type="button" className="shopNowBtn">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="trendsImg"
        />
      </div>
    </div>
  </div>
)
export default Home
