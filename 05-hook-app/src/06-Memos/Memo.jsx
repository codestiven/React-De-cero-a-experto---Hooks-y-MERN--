import React, { useContext } from 'react'
import useCounter from '../hooks/useCounter.js'
import Small from './Small.jsx';

const Memo = () => {

    const { counter, increment } = useCounter(1);


    useContext(React);
  return (
    <div>
      
      <h1>Counter: <Small value={counter}></Small> </h1>
      <hr />
        <button className='btn btn-primary' onClick={ () => increment()}>+1</button>
    </div>
  )
}

export default Memo
