import React from 'react'
import { Getgif } from '../Helpers/getgif'




const GifGrid = ({ category }) => {

  Getgif(category);









  return (
    <div>

      <h3>{category}</h3>
      <p>hola mundo</p>

    </div>
  )
}

export default GifGrid
