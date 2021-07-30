import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import BlockItem from '../BlogItem/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlockList extends Component {
  constructor(props) {
    super(props)
    this.state = {blogsList: [], isLoading: true}
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: formattedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-container">
            {blogsList.map(eachItem => (
              <BlockItem key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlockList
