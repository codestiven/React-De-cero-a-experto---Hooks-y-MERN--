import React, { useState , useEffect } from 'react'
import { Getgif } from '../Helpers/getgif'




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

      <ol>
        {
          images.map((img) => (
            <li key={img.id}>
              <h4>{img.title}</h4>
            </li>
          ))
        }
      </ol>

    </div>
  )
}

export default GifGrid
