// Write your code here.
import './index.css'

const ImageCreater = props => {
  const {eachItem} = props
  const {className, headerText, description, id} = eachItem
  return (
    <div id={id} className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button type="button">Show More</button>
    </div>
  )
}

export default ImageCreater
