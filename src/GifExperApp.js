import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {
    
    const [categorias, setcategorias] = useState(["one punch"]);

    
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategorias={setcategorias}/>
            <hr/>
            
            <ul>
                {
                    categorias.map(categoria => {
                        return <GifGrid 
                        key={categoria}
                        categoria={categoria} />
                    })
                }
            </ul>
        </>
    )
}

export default GifExpertApp;