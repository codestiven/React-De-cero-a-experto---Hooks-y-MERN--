import React from 'react'
import { useState } from 'react'

const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Evita que se recargue la pagina al enviar el formulario
        if (inputValue.trim().length <= 1) return; // Si el valor es menor o igual a 1 no hace nada

        setInputValue(''); // Limpia el input
        console.log(inputValue); // Muestra el valor en la consola


// Si el valor es menor o igual a 1 no hace nada

        setCategories(categories => [inputValue, ...categories]); // Agrega el nuevo valor al array de categorias
    }


    return (

        <form action="" onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} // onChange es un evento que se dispara cada vez que se cambia el valor del input
            />
            <input type="submit" value="boton" />
        </form>
     

    )
}

export default AddCategory
