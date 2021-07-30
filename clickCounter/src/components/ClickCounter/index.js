import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>The Button has been clicked {count} times.</h1>
        <p>Click the button to increase the count!</p>
        <button type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
