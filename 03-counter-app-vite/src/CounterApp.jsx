import React, { useState } from 'react'
import PropTypes from 'prop-types';










const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const sumcounter = () => setCounter(counter + 1);
    const rescounter = () => setCounter(counter - 1);
    const resetcounter = () => setCounter(value);




    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={sumcounter}>
                +1
            </button>
            <button onClick={rescounter}>
                -1
            </button>
            <button aria-label='btn-reset' onClick={resetcounter}>
                Reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}


export default CounterApp
