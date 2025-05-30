import React, { useState, useEffect } from 'react'
import { Getgif } from '../Helpers/getgif'
import Gifitem from './Gifitem';
import { useFetchGifs } from '../Hooks/useFetchGifs'


export const GifGrid = ({ category }) => {



    const { images, isLoading } = useFetchGifs(category);

  console.log(isLoading);












  return (
    <div>

      <h3>{category}</h3>
      {
        isLoading && <h2>Loading...</h2>
      }

      <div className='card-grid'>
        {
          images.map((img) => (
            <Gifitem 
            key={img.id}
             title={img.title}
             {...img}
            />
          ))
        }
      </div>

    </div>
  )
}


