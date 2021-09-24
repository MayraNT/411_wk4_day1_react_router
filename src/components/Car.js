import React from 'react';
import cars from '../cars.json';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
  const id = props.match.params.id;
  const carFound = cars.find(car => car.id == id)  
  return (
    <h2>{carFound.Name}</h2>
  );
};

export default Car;
