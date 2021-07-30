import {Component} from 'react'
import './index.css'

class UserInfo extends Component {
  render() {
    const {eachItem, length} = this.props
    return (
      <li id={eachItem.id} className="listItem">
        <div className="titleAndDate">
          <h3>{eachItem.title}</h3>
          <p className="changeTextColor">{eachItem.publishedDate}</p>
        </div>
        <p className="changeTextColor">{eachItem.description}</p>
        {length !== eachItem.id && <hr />}
      </li>
    )
  }
}

export default UserInfo
