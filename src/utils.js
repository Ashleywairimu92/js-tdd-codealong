// Your code here
import React from 'react';
import { currentAgeForBirthYear } from '../utils';

const AgeDisplay = ({ birthYear }) => {
  const age = currentAgeForBirthYear(birthYear);

  return (
    <div>
      <p>Your age is: {age}</p>
    </div>
  );
};

export default AgeDisplay;
