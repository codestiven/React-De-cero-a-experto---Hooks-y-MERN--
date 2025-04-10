import React from 'react';

export const Getgif = async (category) => {
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
