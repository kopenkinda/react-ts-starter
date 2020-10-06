import React from 'react';
import { Link } from 'react-router-dom';
import { Counter } from '../components/custom/Counter';

export const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/about">About</Link>
      <Counter />
    </div>
  );
};
