import React from 'react';

export default ({ count, setCount, countName }) => (
  <section>
    <p>Count {countName}: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </section>
)
