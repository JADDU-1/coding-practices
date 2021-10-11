import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], name: '', comment: '', count: 0}
...

  render() {
    const {commentList, name, comment, count} = this.state

    return (
      <div className="background-container">
        <div className="comments-container">
          ...
        </div>
        <hr />
        <div className="comments-container">
          <p className="comments-heading">   //Change the tah name from h1 to p
            <span className="span-container">{count}</span>Comments
          </p>
        </div>
        <ul className="list-item-container">
          ...
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
