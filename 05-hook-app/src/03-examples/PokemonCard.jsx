import React, { useLayoutEffect, useRef } from 'react'

const PokemonCard = ({id , name , sprites = []}) => {

const h2ref = useRef();

useLayoutEffect(() => {
  const { height } = h2ref.current.getBoundingClientRect();
  console.log(height);
  // Aquí puedes hacer algo con la altura, como ajustar el estilo de otro elemento
  // Por ejemplo, podrías establecer la altura de un contenedor padre
  // document.querySelector('.card').style.height = `${height}px`;
}, []);



  return (
    <section className="card" style={{ height: 200}}>

      <h2 ref={h2ref} className='text-capitalize'>#{id} - {name}</h2>

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
