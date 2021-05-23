import React from 'react'
import 'boxicons'


const Imagen = ({imagen}) => {

    const{downloads, likes, largeImageURL, views, tags} = imagen

    return (
            <div className='col-12 col-sm-6 col-lg-4'>
                <div className='card mb-2'>
                    <img className='card-img-top' src={largeImageURL} alt={tags}/>
                    <div className='card-body'>
            
                        <div className='row mb-3'>
                            <em className='col-10 card-text'> <box-icon size='xs' type='solid' name='purchase-tag-alt' color='#ff7518'></box-icon> {tags}</em>
                            <a className='col-2' href={largeImageURL}  target='_blank' rel='noopener noreferrer'><box-icon  name="expand-alt" color='#1283A9'></box-icon></a>
                        </div>
            
                        <div className='row mt-2'>
                            <p className='col-4'><box-icon size='xs' type='solid' name="like" color='#ff7518'></box-icon> {likes}</p>
                            <p className='col-4'><box-icon size='xs' type='solid' name="low-vision" color='#ff7518'></box-icon> {views}</p>
                            <p className='col-4'><box-icon size='xs' type='solid' name="download" color='#ff7518'></box-icon> {downloads}</p>
                        </div>
            
                    </div>
                </div>
            </div>
    )
}

export default Imagen
