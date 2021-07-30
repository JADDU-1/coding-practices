import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onAddNumber = value => {
    // this.setState(prevState => {
    //   return {balance: prevState.balance - value}
    // })
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="innerContainer">
          <div className="profile-section">
            <div className="profile-pic">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="account-balance">
            <p className="your-Balance">Your Balance</p>
            <div>
              <h1>{balance}</h1>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <h1>Withdraw</h1>
          <p className="rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="option-container">
            {denominationsList.map(eachNumber => (
              <DenominationItem
                key={eachNumber.id}
                onAddNumber={this.onAddNumber}
                eachValue={eachNumber}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
