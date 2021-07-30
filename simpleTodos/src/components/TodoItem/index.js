// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {eachTodo, onDeleteClick} = this.props
    const {id, title} = eachTodo

    const onClickDelete = () => {
      onDeleteClick(id)
    }

    return (
      <li id={id} className="card-container">
        <p className="para">{title}</p>
        <button className="button" type="button" onClick={onClickDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
