import React from 'react'
import PropTypes from 'prop-types';






const handleApp = () => {
    console.log('+1')
}



const CounterApp = ({value}) => {
  




    
  return (
    <>
          <h1>CounterApp</h1>
          <h2> {value} </h2>

          <button onClick={handleApp}>
            +1
          </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}


export default CounterApp
