import React, { useState } from 'react'



function GifExpertApp() {
  
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);



  const OnAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  }


  return (
    <>

    {/* titulo */}

    <h1>hola mundo</h1>

    <ol>
      {
        categories.map((category) => {
          return <li key={category}>{category}</li>
        })
      }


    </ol>



      <button onClick={() => OnAddCategory("aaaaaa") }>Agregar</button>














    {/* input */}

    {/* listado de gifs */}
         {/* gif item */}

    </>
  )
}

export default GifExpertApp
