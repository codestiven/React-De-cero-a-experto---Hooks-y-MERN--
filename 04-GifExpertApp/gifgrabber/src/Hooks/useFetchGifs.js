import React, { useState, useEffect } from 'react'
import { Getgif } from '../Helpers/getgif';

export const useFetchGifs = (category) => {


    const [images, setImages] = useState([]);

    const getimage = async () => {
        const newImages = await Getgif(category);

        setImages(newImages);
    }

    useEffect(() => {

        Getgif(category);
        getimage();

    }, []);





  return {
    images: images,
    isLoading: true,
  }
}

