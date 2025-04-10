import React from 'react'
const getgif = async (category) => {
  const apiKey = 'zNXMRK9dCTkKzPqJ9Gq4xJ7KXf3JYYuh';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })
  console.log(gifs);
}




const GifGrid = ({ category }) => {

  getgif(category);









  return (
    <div>

      <h3>{category}</h3>
      <p>hola mundo</p>

    </div>
  )
}

export default GifGrid
