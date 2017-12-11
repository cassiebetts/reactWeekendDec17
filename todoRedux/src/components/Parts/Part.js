import React from 'react';

const Part = ({match}) => (
  <div>
    {console.log(match)}
    <h3>{match.params.partId}</h3>
  </div>
);

export default Part
