import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs.js';




export const GifGrid = ( {categoria}) => {
    
    const {data:images, loading} = useFetchGifs( categoria );
    
    return (
        <>
            <h3 className="animate__animated animate__rotateInUpLeft"> {categoria} </h3>
            {loading && <p className = "animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img} />
                    ))
                }
            
            </div>
        </>            
    )
}