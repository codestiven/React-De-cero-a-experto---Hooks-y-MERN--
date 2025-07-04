import React, { use } from 'react'
import UseFetch from '../hooks/UseFetch'
import useCounter from '../hooks/useCounter.js'
import PoquemonCard from './PokemonCard'

const MultipleCustomHook = () => {



  const { counter, increment, decrement, reset } = useCounter(1);





  const { data, Isloading, HasError, error } = UseFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);






  return (
    <div>
      
      <h1>Multiple Custom Hook</h1>

      {Isloading ? <h2>Loading...</h2> : <PoquemonCard id={data?.id} name={data?.name} sprites={
        [data?.sprites?.front_default, data?.sprites?.back_default , data?.sprites?.front_shiny, data?.sprites?.back_shiny]
      } />  }
      <hr />




      <button onClick={() => counter > 1 ? decrement() : null}>anterior</button>
      <button onClick={() => increment()} >siguiente</button>

      { HasError && <div className="alert alert-danger">{ error }</div> }
    </div>
  )
}

export default MultipleCustomHook
