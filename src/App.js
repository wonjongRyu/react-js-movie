import React from "react";

function Fruit(props) {
  return (
    <h2>
      I like {props.number} {props.favorite}
    </h2>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Fruit favorite="pear" number="2" />
      <Fruit favorite="grape" number="6" />
    </div>
  );
}

export default App;
