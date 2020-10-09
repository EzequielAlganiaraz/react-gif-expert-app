import {useState, useEffect} from 'react';
import {getGif} from '../helpers/getGif.js'
export const useFetchGifs = (categoria) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGif(categoria) 
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
        })
    }, [categoria])
    return state;
}
