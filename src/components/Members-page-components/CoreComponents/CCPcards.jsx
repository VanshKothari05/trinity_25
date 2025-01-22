import React from 'react'
import CoreCard from './CoreCard'
import img3 from '../../../resources/Core_Members_images/4.jpg'
import img4 from '../../../resources/Core_Members_images/5.jpg'
import img5 from '../../../resources/Core_Members_images/6.jpg'
const ID_list = [
    img3, img4, img5
]
export default function CCPcards() {
    return (
        <div className='cards-container'>
            {ID_list.map((ele, id) => {
                return (
                    <CoreCard
                        name="mentor 1"
                        post="Mentor"
                        imgUrl={ele}
                        fb="wwww.google.com"
                        insta="wwww.google.com"
                        linkdin="wwww.google.com"
                        key={id}
                    />
                )
            })}

        </div>
    )
}
