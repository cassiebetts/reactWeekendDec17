import React from 'react';
import {
  Route,
  Link,

} from 'react-router-dom'
import Part from './Part';

const Parts = ({match}) => (
  <div>
    <h2>Parts</h2>
    <ul>
      <li>
        <Link to={`${match.url}/computer/1`}>Computer</Link>
      </li>
      <li>
        <Link to={`${match.url}/video/2`}>Video</Link>
      </li>
      <li>
        <Link to={`${match.url}/audio/3`}>Audio</Link>
      </li>
    </ul>
    <hr />

    <Route path={`${match.url}/:partId/:warehouseId?`} component={Part} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a part.</h3>
    )} />
  </div>
);

export default Parts
