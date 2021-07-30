// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {eachValue, onAddNumber} = this.props
    const {id, value} = eachValue
    const onclickNumber = () => {
      onAddNumber(value)
    }
    return (
      <li id={id} className="list">
        <button type="button" className="option" onClick={onclickNumber}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
