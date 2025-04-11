import React, { useState, useEffect } from 'react'
import { Getgif } from '../Helpers/getgif';

export const useFetchGifs = (category) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getimage = async () => {
        const newImages = await Getgif(category);

        setImages(newImages);
    }

    useEffect(() => {

        Getgif(category);
        getimage();
        setIsLoading(false);

    }, []);





  return {
    images: images,
    isLoading: isLoading,
  }
}

