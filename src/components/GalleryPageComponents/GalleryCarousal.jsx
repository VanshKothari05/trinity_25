import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Core_and_cocomm from '../../resources/images/Core_and_cocomm.jpeg'
import Co_comm from '../../resources/images/Co-Comm-image.jpg'
import Core_img from '../../resources/images/Core_img.jpeg'
import teachers from '../../resources/images/Teachers.jpeg'
import Carouselitem from './CarouselItem';

function GalleryCarousal() {
    var items = [
        {
            name: "Random Name #1",
            imgUrl: Core_and_cocomm
        },
        {
            name: "Random Name #2",
            imgUrl: Co_comm
        },
        {
            name: "Random Name #2",
            imgUrl: Core_img
        },
        {
            name: "Random Name #2",
            imgUrl: teachers
        }
    ]

    return (

        <Carousel
            animation="slide"
        >
            {
                items.map((item, i) => <Carouselitem key={i} imgUrl={item.imgUrl} />)
            }
        </Carousel>

    )
}

export default GalleryCarousal;