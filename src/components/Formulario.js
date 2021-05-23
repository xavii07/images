import React, { useState } from 'react'
import Error from './Error'



const Formulario = ({setBusqueda}) => {

    const [info,setInfo] = useState({nombre:'', orientacion:'horizontal'})
    const [error, setError] = useState(false)

    const {nombre, orientacion} = info


    //cunado ingresa palabras en el input
    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        })
    }

    //cuando presiona el boton buscar
    const handleSubmit = e => {
        e.preventDefault()

        //validar input
        if(nombre.trim() === '') {
            setError(true)
            return
        }

        //si pasa la validacion
        setError(false)

        //pasar al componente principal la palabra ingresada
        setBusqueda(info)
       //setInfo({nombre:'', orientacion:''})
   
   
    }




    return (
        <form
            onSubmit={handleSubmit}
        >
            {error && <Error  mensaje='Ingresa una palabra para Buscar'/>}

            <div className='row'>
                <div className='form-group col-md-4'>
                    <input 
                        name='nombre'
                        type='text'
                        value={nombre}
                        className='form-control'
                        placeholder='Busca una Imagen Ej. Gato'
                        onChange={handleChange}
                        />
                </div>
                <div className='form-group col-md-4'>
                   <select
                        name='orientacion'
                        className='form-control'
                        value={orientacion}
                        onChange={handleChange}
                   >
                       <option value='vertical'>Vertical</option>
                       <option value='horizontal'>Horizontal</option>
                   </select>
                </div>
                <div className='form-group col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-warning btn-block'
                        value='Buscar Imagen'
                    />
                </div>
            </div>

        </form>
    )
}

export default Formulario
