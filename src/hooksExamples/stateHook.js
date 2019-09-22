import React, { useState } from 'react';

export default () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  return (
    <section>
      <h1>State Hook Examples</h1>
      <section>
	<h2>Basic Count Example</h2>
	<p>Count One: {countOne}</p>
	<button onClick={() => setCountOne(countOne + 1)}>Increment</button>
	<button onClick={() => setCountOne(countOne - 1)}>Decrement</button>
      </section>
      <section>
	<h2>Multiple useState Example</h2>
	<p>Hooks must be used at the top level of the component, and <br/>not conditionally (eg. in an if statement, or a loop)</p>
	<section>
	  <p>Count Two: {countTwo}</p>
	  <button onClick={() => setCountTwo(countTwo + 1)}>Increment</button>
	  <button onClick={() => setCountTwo(countTwo - 1)}>Decrement</button>
	</section>
	<section>
	  <p>Count Three: {countThree}</p>
	  <button onClick={() => setCountThree(countThree + 1)}>Increment</button>
	  <button onClick={() => setCountThree(countThree - 1)}>Decrement</button>
	</section>
      </section>
    </section>
  )
}
