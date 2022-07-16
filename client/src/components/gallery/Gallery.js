import React from 'react'
import './Gallery.css'

const Gallery = ({PhotosArray}) => {


  return (

<div className="content">
<section className="grid">

{PhotosArray.map(photo=>(
       <div className='photo' key={photo.id}>
        <img className='photo__img' src={photo.urls.small} alt={photo.alt_description} />
        <p  className='photo__title'>{photo.alt_description}</p>

   
        </div>
    ))
}
        
    </section>
    </div>
  )
}

export default Gallery