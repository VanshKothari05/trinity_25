import React from 'react'
import CoreCard from './CoreCard'

import img1 from '../../../resources/Core_Members_images/1.jpg'
import img2 from '../../../resources/Core_Members_images/2.jpg'
import img3 from '../../../resources/Core_Members_images/3.jpg'

const ID_list = [
    img1, img2, img3
]
export default function CPcards() {
    return (
        <div className="flex flex-wrap justify-center">
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
