import React, { useState } from 'react';


const Counter = ({ count, setCount, countName }) => (
  <section>
    <p>Count {countName}: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </section>
)

export default () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  return (
    <section>
      <h1>State Hook Examples</h1>
      <section>
	<h2>Basic Count Example</h2>
	<Counter count={countOne} setCount={setCountOne} countName="One" />
      </section>
      <section>
	<h2>Multiple useState Example</h2>
	<p>Hooks must be used at the top level of the component, and <br/>not conditionally (eg. in an if statement, or a loop)</p>
	<Counter count={countTwo} setCount={setCountTwo} countName="Two" />
	<Counter count={countThree} setCount={setCountThree} countName="Three" />
      </section>
    </section>
  )
}
