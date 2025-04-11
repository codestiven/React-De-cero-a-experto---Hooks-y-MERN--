import React, { useState } from 'react'
import { AddCategory, GifGrid } from './Components'




function GifExpertApp() {
  
  const [categories, setCategories] = useState(['One Punch']);



  const OnAddCategory = (newCategory) => {

    if(newCategory.includes(categories)) return; // Si el valor ya existe no hace nada



    setCategories([...categories, newCategory]);
  }


  return (
    <>



      <h1>GifExpertApp</h1>

      <AddCategory 
      // setCategories={setCategories} 
      OnAddCategory={OnAddCategory}
      />




    <ol>
      {
        categories.map((category) => (
          // <li key={category}>{category}</li>
          <GifGrid key={category} category={category} /> 
        ))
      }


    </ol>

















    {/* input */}

    {/* listado de gifs */}
         {/* gif item */}

    </>
  )
}

export default GifExpertApp
