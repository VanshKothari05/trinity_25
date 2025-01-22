import React from 'react'
import CoreCard from './CoreCard'

import img1 from '../../../resources/Core_Members_images/32.jpg'
import img2 from '../../../resources/Core_Members_images/33.jpg'
import img3 from '../../../resources/Core_Members_images/34.jpg'
import img4 from '../../../resources/Core_Members_images/35.jpg'
import img5 from '../../../resources/Core_Members_images/36.jpg'
import img6 from '../../../resources/Core_Members_images/37.jpg'
import img7 from '../../../resources/Core_Members_images/38.jpg'
import img8 from '../../../resources/Core_Members_images/39.jpg'
import img9 from '../../../resources/Core_Members_images/40.jpg'
import img10 from '../../../resources/Core_Members_images/41.jpg'
import img11 from '../../../resources/Core_Members_images/42.jpg'
import img12 from '../../../resources/Core_Members_images/43.jpg'
import img13 from '../../../resources/Core_Members_images/44.jpg'
import img14 from '../../../resources/Core_Members_images/45.jpg'
import img15 from '../../../resources/Core_Members_images/46.jpg'
import img16 from '../../../resources/Core_Members_images/47.jpg'

const ID_list1 = [
    img1, img2, img3, img4
]

const ID_list2 = [
    img5, img6, img7, img8
]

const ID_list3 = [
    img9, img10, img11, img12
]

const ID_list4 = [
    img13, img14, img15, img16
]


export default function HODCards() {
    return (
        <>
            <div className="container flex flex-wrap justify-center">
                {ID_list1.map((ele, id) => {
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
            <div className="flex flex-wrap justify-center">
                {ID_list2.map((ele, id) => {
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
            <div className="flex flex-wrap justify-center">
                {ID_list3.map((ele, id) => {
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
            <div className="flex flex-wrap justify-center">
                {ID_list4.map((ele, id) => {
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
        </>
    )
}
