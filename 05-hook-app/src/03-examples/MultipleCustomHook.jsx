import React, { use } from 'react'
import UseFetch from '../hooks/UseFetch'

const MultipleCustomHook = () => {


  const { data, Isloading, HasError, error } = UseFetch('https://pokeapi.co/api/v2/pokemon/ditto');






  return (
    <div>
      
      <h1>Multiple Custom Hook</h1>

      { Isloading && <h2>Loading...</h2> }
      <hr />

      <pre>{ data?.name }</pre>
    </div>
  )
}

export default MultipleCustomHook
