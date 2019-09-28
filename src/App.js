import React from "react";
import PropTypes from "prop-types";

function Fruit({ name, number, score }) {
  return (
    <div>
      <h2>
        I eat {number} {name} everyday! Today, taste of fruit: {score}/5.0
      </h2>
    </div>
  );
}

const fruitILike = [
  {
    id: 1,
    name: "pear",
    number: 2,
    score: 4.1
  },
  {
    id: 2,
    name: "grape",
    number: 3,
    score: 3.0
  },
  {
    id: 3,
    name: "orange",
    number: 1,
    score: 4.3
  },
  {
    id: 4,
    name: "banana",
    number: 4,
    score: 3.6
  }
];

Fruit.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {fruitILike.map(fruitILike => (
        <Fruit
          key={fruitILike.id}
          number={fruitILike.number}
          name={fruitILike.name}
          score={fruitILike.score}
        />
      ))}
    </div>
  );
}

export default App;
