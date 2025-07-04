import React from 'react'

const PokemonCard = ({id , name , sprites = []}) => {
  return (
    <section className="card" style={{ height: 200}}>

        <h2 className='text-capitalize'>#{id} - {name}</h2>

        <div>
        {
                  sprites.map( sprite => (
                    <img key={sprite} src={sprite} alt={name} />
                  ))
        }
        </div>
      
    </section>
  )
}

export default PokemonCard
