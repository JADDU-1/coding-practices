// Write your code here
import './index.css'

const EventItem = props => {
  const {isActive, setEventID, eventDetails} = props
  const {id, imageUrl, name, location} = eventDetails

  const imgClass = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setEventID(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img
          src={imageUrl}
          alt="event"
          className={imgClass}
          onClick={onClickEvent}
        />
      </button>

      <p className="heading">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
