import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import CryptocurrencyCurrenciesList from '../CryptocurrenciesList/index'

class CryptocurrencyTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {currencyList: [], loaderStatus: true}
  }

  componentDidMount = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const fechedData = await response.json()
    const convertedData = fechedData.map(eachObject => ({
      id: eachObject.id,
      currencyName: eachObject.currency_name,
      usdValue: eachObject.usd_value,
      euroValue: eachObject.euro_value,
      currencyLogo: eachObject.currency_logo,
    }))

    this.setState({currencyList: convertedData, loaderStatus: false})
  }

  render() {
    const {currencyList, loaderStatus} = this.state
    return (
      <div className="bg-container">
        {loaderStatus ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="Inner-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              alt="Cryptocurrency Tracker"
              className="currency-image"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <CryptocurrencyCurrenciesList currencyList={currencyList} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
