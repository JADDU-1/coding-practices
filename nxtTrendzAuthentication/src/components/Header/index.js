import './index.css'

const Header = () => (
  <header className="headerCon">
    <div className="logoCon">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logoImg"
      />
    </div>
    <ul className="routLinksCon">
      <li className="routsTxt">Home</li>
      <li className="routsTxt">Products</li>
      <li className="routsTxt">Cart</li>
      <li className="routsTxt">
        <button className="logoutBtn" type="button">
          Logout
        </button>
      </li>
    </ul>
  </header>
)
export default Header
