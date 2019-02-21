import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example';

function App() {
  return (
    <Fragment>
      <Example />
      <Example />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
