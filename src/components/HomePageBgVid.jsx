import React from 'react'
import bgVideo from '../resources/HomePageBgVid.mp4'


export const HomePageBgVid = () => {

    return (

        <div className='bg-video' >
            <div className="overlay"></div>
            <video src={bgVideo} autoPlay loop muted />
        </div>

    )
}
