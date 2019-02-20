import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example';

function App() {
  return (
    <div>
      <Example />
      <Example />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
