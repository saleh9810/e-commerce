import React from 'react'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'



const Gallery = () => {
    return (
        <div className="gallery">
            <h3 className="gallery__title">Hand Picked</h3>
            <div className="gallery__store">
                    <div className="gallery__store__col1">
                       <img className="gallery__store__col1__img2" src={img2} alt={img2} />
                        <img className="gallery__store__col1__img3" src={img3} alt={img3} />
                    </div>

                    <div className="gallery__store__col2">
                      <img className="gallery__store__col2__img4" src={img4} alt={img4} />
                    </div>

                    <div className="gallery__store__col3">
                         <img className="gallery__store__col3__img5" src={img5} alt={img5} />
                         <img className="gallery__store__col3__img6" src={img6} alt={img6} />
                    </div>

            </div>
        </div>
    )
}

export default Gallery
