
import React, { useState } from 'react';

const CounterApp = () => {

  const [conunter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30 ,
  });
  return (
    <>
      <h1>Counter1: {conunter.counter1}</h1>
      <h1>Counter2: {conunter.counter2}</h1>
      <h1>Counter3: {conunter.counter3}</h1>

        <hr />


      <button>-1</button>
      <button onClick={() => setCounter({
        ...conunter,
        counter1: conunter.counter1 + 1,
      })}>+1</button>

    </>
  )
}

export default CounterApp
