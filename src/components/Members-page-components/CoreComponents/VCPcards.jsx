import React from 'react'
import CoreCard from './CoreCard'
import img1 from '../../../resources/Core_Members_images/10.jpg'
import img2 from '../../../resources/Core_Members_images/9.jpg'
import img3 from '../../../resources/Core_Members_images/7.jpg'
import img4 from '../../../resources/Core_Members_images/8.jpg'
import img5 from '../../../resources/Core_Members_images/11.jpg'
import img6 from '../../../resources/Core_Members_images/12.jpg'
import img7 from '../../../resources/Core_Members_images/13.jpg'
import img8 from '../../../resources/Core_Members_images/14.jpg'
import img9 from '../../../resources/Core_Members_images/15.jpg'
import img10 from '../../../resources/Core_Members_images/16.jpg'
import img11 from '../../../resources/Core_Members_images/17.jpg'
import img12 from '../../../resources/Core_Members_images/18.jpg'
import img13 from '../../../resources/Core_Members_images/19.jpg'
import img14 from '../../../resources/Core_Members_images/20.jpg'
import img15 from '../../../resources/Core_Members_images/21.jpg'
import img16 from '../../../resources/Core_Members_images/22.jpg'

const ID_list1 = [
    img1, img2, img3, img4
]
const ID_list2 = [
    img5, img6,  img7, img8
]
const ID_list3 = [
    img9, img10, img11, img12
]
const ID_list4 = [
    img13, img14, img15, img16
]


export default function VCPcards() {
    return (
        <>
            <div className="flex flex-wrap justify-center">
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
