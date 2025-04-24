

export const Getgif = async (category) => {
    const apiKey = 'Hdz7eqp6pau6ewBdpvTIYQTye6dVb4FH';
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



    return gifs;
}


