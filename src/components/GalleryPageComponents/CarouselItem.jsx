import React from 'react'

export default function Carouselitem(props) {
    return (
        <div className='Carousel-item'>
            <img src={props.imgUrl} alt="cover" />
        </div>
    )
}
