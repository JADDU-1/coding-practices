import {Component} from 'react'
import './index.css'

class CryptoCurrencyCurrencyItem extends Component {
  render() {
    const {eachItem} = this.props
    const {id, currencyName, usdValue, euroValue, currencyLogo} = eachItem
    return (
      <li id={id} className="currency-container">
        <div className="image-name">
          <img
            alt={currencyName}
            className="currency-logo"
            src={currencyLogo}
          />
          <p>{currencyName}</p>
        </div>
        <div className="usd-euro">
          <p className="usd">{usdValue}</p>
          <p className="euro">{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptoCurrencyCurrencyItem
