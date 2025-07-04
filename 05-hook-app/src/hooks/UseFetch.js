import React, { use, useEffect } from 'react'
import { useState } from 'react'



const localCache = {}


const UseFetch = (URL) => {

    

    const [state, setState] = useState({
        data: null,
        Isloading: true,
        HasError: null,
        error: null
    });
  

    useEffect(() => {
        getFetch();
    }, [URL]);

    const setloading = () => {
        setState({
            data: null,
            Isloading: true,
            HasError: false,
            error: null
        });
    }

    const getFetch = async () => {


        if (localCache[URL] ) {
            console.log('Data from cache');
            setState({
                data: localCache[URL],
                Isloading: false,
                HasError: false,
                error: null
            });

            return;
        }

        setloading();



        const response = await fetch(URL);
        const data = await response.json();

        //sleep
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (!response.ok) {
            setState({
                data: null,
                Isloading: false,
                HasError: true,
                error: data.message || 'Something went wrong'
            });
            return;
        }

        setState({
            data: data,
            Isloading: false,
            HasError: false,
            error: null
        });

        // manejo de cache
        localCache[URL] = data;
    }




    return{
        data: state.data,
        Isloading: state.Isloading,
        HasError: state.HasError,
        error: state.error,
    }
}

export default UseFetch
