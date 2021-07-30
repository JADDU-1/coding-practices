// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachItem} = this.props
    const {id, name, imgUrl} = eachItem
    return (
      <li id={id} className="card-container">
        <img className="image" alt={name} src={imgUrl} />
        <h1 className="headings">{name}</h1>
      </li>
    )
  }
}

export default DestinationItem
