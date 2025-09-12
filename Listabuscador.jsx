import React from "react";
import { useState, useEffect } from "react";

/*Buscador en lista
Crea un componente que muestre una lista de nombres y un input de búsqueda. Al escribir, debe filtrar la lista en tiempo real. */
const ListaBuscador = () =>{

    const [listnames] = useState(['Ana, Jose, Juan, Rodrigo, Ale']) ;
    const [search, setSearch] = useState('');

    //actualiza el estado de búsqueda al escribir
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    
    const filteredNames = listnames.filter(n => n.toLowerCase().includes(search.toLowerCase()));
    
    return(
        <div>
            <input 
                type="search" 
                placeholder="Ingresa el nombre a buscar"
                name="" 
                id="" 
                onChange={filteredNames} 
                value={handleSearch}
            />
            <ul>
                {filteredNames.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
        </div>
    )
}
export default ListaBuscador;

