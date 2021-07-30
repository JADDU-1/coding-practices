import {Component} from 'react'
import './index.css'
import CryptoCurrencyCurrencyItem from '../CryptocurrencyItem/index'

class CryptocurrencyCurrenciesList extends Component {
  render() {
    const {currencyList} = this.props
    return (
      <ul className="bg-currencyList-Container">
        <div className="heading-table">
          <div className="coin-heading">
            <p>Coin Type</p>
          </div>
          <div className="usd-euro-heading">
            <p className="usd">USD</p>
            <p className="euro">EURO</p>
          </div>
        </div>
        {currencyList.map(eachItem => (
          <CryptoCurrencyCurrencyItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    )
  }
}

export default CryptocurrencyCurrenciesList
