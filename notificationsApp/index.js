function Notification(props) {
  return (
    <div className={props.class}>
      <img class="image" src={props.url} />
      <p>{props.text}</p>
    </div>
  );
}

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="inner-container">
      <Notification
        class="info"
        text="Information Message"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        class="success"
        text="Success Message"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        class="warning"
        text="Warning Message"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        class="error"
        text="Error Message"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
