import React, { use, useEffect } from 'react'
import { useState } from 'react'

const UseFetch = () => {

    const [state, setState] = useState({
        data: null,
        Isloading: true,
        HasError: null,
        error: null
    });
  

    useEffect(() => {
        getFetch();
    }, []);

    const getFetch = async () => {

        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await response.json();

        console.log(data);
    }




    return{
        data: state.data,
        Isloading: state.Isloading,
        HasError: state.HasError,
        error: state.error,
    }
}

export default UseFetch
