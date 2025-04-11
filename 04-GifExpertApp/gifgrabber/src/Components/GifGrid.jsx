import React, { useState, useEffect } from 'react'
import { Getgif } from '../Helpers/getgif'
import Gifitem from './Gifitem';




const GifGrid = ({ category }) => {




  const [images, setImages] = useState([]);

  const getimage = async () => {
    const newImages = await Getgif(category);

    setImages(newImages);
  }

  useEffect(() => {

    Getgif(category);
    getimage();

  }, []);











  return (
    <div>

      <h3>{category}</h3>

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

export default GifGrid
