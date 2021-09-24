import React from 'react';
import cars from '../cars.json';
// import material ui components here //
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Chip } from '@material-ui/core';

const Car = (props) => {
  const id = props.match.params.id;
  const carFound = cars.find((car) => car.id == id);
  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{carFound.Name}</h2>
        {Object.entries(carFound).map(([key, value]) => {
            return <Chip label={`${key}: ${value}`} />
        })}
      </Paper>
    </Container>
  );
};

export default Car;
