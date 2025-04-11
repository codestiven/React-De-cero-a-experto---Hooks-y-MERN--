import React, { useState , useEffect } from 'react'
import { Getgif } from '../Helpers/getgif'




const GifGrid = ({ category }) => {


  const [counter, setcounter] = useState(10);

  useEffect(() => {

    Getgif(category);
  
  }, []);











  return (
    <div>

      <h3>{category}</h3>
      <p>hola mundo</p>

    </div>
  )
}

export default GifGrid
