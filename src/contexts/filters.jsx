import { createContext, useState } from "react";

//Crear el Contexto
export const FiltersContext = createContext();

//Proveer Contextos
export function FiltersProvider ({ children }){
    const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 500
   });
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            { children }
        </FiltersContext.Provider>
    )
} 