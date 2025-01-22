import React from 'react'

export default function GalleryPhoto(props) {
    return (
        <div className='photo'>
            <img src={props.imgUrl} alt="GalleryImage" />
        </div>
    )
}
