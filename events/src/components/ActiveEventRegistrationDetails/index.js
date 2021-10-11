// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeRegistrationStatus} = props

  const renderNoActiveEvent = () => (
    <p className="no-active-event-text">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegister = () => (
    <>
      <img
        className="Yet-to-register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="Yet-to-register-text">
        A live performance brings so much to your relationship with dance,
        Seeing dance live can often make you fall totally in love with the
        beautiful art form.
      </p>
      <button type="button" className="Register-button">
        Register Here
      </button>
    </>
  )

  const renderRegistered = () => (
    <>
      <img
        className="registered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </>
  )

  const renderRegistrationsClosed = () => (
    <>
      <img
        className="registrations-closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-text">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen <br />
        the registrations soon!
      </p>
    </>
  )

  const renderRegistrationStatus = () => {
    switch (activeRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegistered()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoActiveEvent()
    }
  }

  return <div className="view-container">{renderRegistrationStatus()}</div>
}

export default ActiveEventRegistrationDetails
