import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>State Hook Examples</h1>
      <section>
	<h3>Basic Count Example</h3>
	<p>{count}</p>
	<button onClick={() => setCount(count + 1)}>Increment</button>
	<button onClick={() => setCount(count - 1)}>Decrement</button>
      </section>
    </section>
  )
}
