import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import ListadoImagen from './components/ListadoImagen';
import usePaginaActual from './hook/usePaginaActual';






function App() {
  
  const [busqueda, setBusqueda] = useState({})
  const [imagenes, setImagenes] = useState([])
  const [totalpaginas, setTotalPaginas] = useState(1)

  //desustructurar la informacion que ingreso el usuario
  const {nombre, orientacion} = busqueda
  
  //utilizar Custom hook
  const {paginaactual, siguiente, anterior} = usePaginaActual(1, totalpaginas)

  useEffect(() => {

    const consultarAPI = async () => {

      if(Object.keys(busqueda).length === 0) return

      const paginacion = 27
      const key = '20038962-23d893436fa549b3a6a6741e6' 
      const url = `https://pixabay.com/api/?key=${key}&q=${nombre}&per_page=${paginacion}&orientation=${orientacion}&page=${paginaactual}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setImagenes(resultado.hits)

      //calcular el total de paginas
      setTotalPaginas(Math.ceil(resultado.totalHits / paginacion) )


      //hacer el scroll hacia arriba
      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({behavior:'smooth'})
      
    }
    consultarAPI()


  }, [nombre, paginaactual, busqueda, orientacion])


  



  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className=' text-center p-5 text-white'>Buscador de Imagenes</h1>

        <Formulario 
          setBusqueda={setBusqueda}
        />
      </div>

      <ListadoImagen imagenes={imagenes}/>

      <div className='row m-5'>
        {paginaactual !== 1 && 
        <button 
          className='col-5 col-lg-2 mx-auto btn btn-warning' 
          onClick={anterior}
        >&laquo; Previous</button>}

        {paginaactual !== totalpaginas && 
        <button 
          className='col-5 col-lg-2 mx-auto btn  btn-warning' 
          onClick={siguiente}
        >Next &raquo;</button>}
        
      </div>
    </div>
  );
}

export default App;
