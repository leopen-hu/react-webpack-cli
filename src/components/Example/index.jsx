import React, { Fragment, useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <p> You clicked {count} times </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Fragment>
  );
}
