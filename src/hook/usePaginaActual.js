import { useState } from "react";



const usePaginaActual = (initialState = 1, totalpaginas) => {

    const [paginaactual, setPaginaActual] = useState(initialState)

    const siguiente = () => {
        if(paginaactual === totalpaginas) return
        setPaginaActual(paginaactual + 1)
    }
    
    const anterior = () => {
        if (paginaactual === 1) return

        setPaginaActual(paginaactual - 1)
    }

    return {
        paginaactual,
        siguiente,
        anterior,
    }
   
}
 
export default usePaginaActual;