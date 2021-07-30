function Box(props) {
  return <div className={props.class}>{props.text}</div>;
}

const element = (
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="inner">
      <Box class="box1" text="Small" />
      <Box class="box2" text="Medium" />
      <Box class="box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
