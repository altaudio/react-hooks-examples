import React, { useState } from 'react';
import Counter from './common/Counter'

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
    </section>
  )
}
