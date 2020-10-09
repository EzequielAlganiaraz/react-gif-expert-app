export const getGif = async ( categoria ) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=2BttbzNmgPgNM8lwVHR8b2w2njcTZRT1&q=${encodeURI(categoria)}&limit=15`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    console.log(gif);
    return gif;
}