import React from 'react'
import CoreCard from './CoreCard'
import img1 from '../../../resources/Core_Members_images/23.jpg'
import img2 from '../../../resources/Core_Members_images/24.jpg'
import img3 from '../../../resources/Core_Members_images/25.jpg'
import img4 from '../../../resources/Core_Members_images/26.jpg'
import img5 from '../../../resources/Core_Members_images/27.jpg'
import img6 from '../../../resources/Core_Members_images/28.jpg'
import img7 from '../../../resources/Core_Members_images/29.jpg'
import img8 from '../../../resources/Core_Members_images/30.jpg'
import img9 from '../../../resources/Core_Members_images/31.jpg'

const ID_list1 = [
    img1, img2, img3
]
const ID_list2 = [
    img4, img5, img6
]
const ID_list3 = [
    img7, img8, img9
]
export default function SecretaryCards() {
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
        </>
    )
}
