import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'



function GifExpertApp() {
  
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);



  const OnAddCategory = (newCategory) => {

    if(newCategory.includes(categories)) return; // Si el valor ya existe no hace nada



    setCategories([...categories, newCategory]);
  }


  return (
    <>

    {/* titulo */}

      <h1>GifExpertApp</h1>

      <AddCategory 
      // setCategories={setCategories} 
      OnAddCategory={OnAddCategory}
      />
      {/* <button onClick={() => OnAddCategory("aaaaaa")}>Agregar</button> */}



    <ol>
      {
        categories.map((category) => {
          return <li key={category}>{category}</li>
        })
      }


    </ol>

















    {/* input */}

    {/* listado de gifs */}
         {/* gif item */}

    </>
  )
}

export default GifExpertApp
