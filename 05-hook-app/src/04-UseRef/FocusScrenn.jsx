import React, { useRef } from 'react'

const FocusScrenn = () => {
    const inputref = useRef();

    const onclick = () => {

        // console.log(inputref.current.value);
        // inputref.current.focus();
        inputref.current.select(); // Selecciona el texto dentro del input
        // inputref.current.value = ''; // Limpia el valor del input

    };




    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input ref={inputref} type="text" className="form-control" placeholder="Ingrese su nombre" />
            <input type="text" className="form-control" placeholder="Ingrese su nombre" />
            <input type="text" className="form-control" placeholder="Ingrese su nombre" />
            <input type="text" className="form-control" placeholder="Ingrese su nombre" />

            <button className='btn' onClick={onclick}>
                Set Focus
            </button>

        </>
    )
}

export default FocusScrenn
