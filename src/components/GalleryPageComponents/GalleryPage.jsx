import React, { useEffect } from 'react'
import image1 from '../../resources/images/img1.JPG'
import image2 from '../../resources/images/img2.JPG'
import image3 from '../../resources/images/img3.JPG'
import image4 from '../../resources/images/img4.JPG'
import image5 from '../../resources/images/img5.JPG'
import GalleryCarousal from './GalleryCarousal'
import GalleryPhoto from './GalleryContentTwo'
import YtFrame1 from './YtFrame1'
import YtFrame2 from './YtFrame2'

export default function GalleryPage() {
	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}, [])
	return (
		<div className='gallery-main-container'>
			<h1>The Trinity Memory Wall</h1>
			<div className='carousal-outer-container'>
				<div className='carousal-container'>
					<GalleryCarousal />
				</div>
			</div>

			<h3 className='video-section-title'>A Glimse Of The Past</h3>
			<div className='yt-frames-container'>
				<YtFrame1/>
				<YtFrame2 />
			</div>
			<div className='photos-container'>
				<GalleryPhoto imgUrl={image1} />
				<GalleryPhoto imgUrl={image2} />
				<GalleryPhoto imgUrl={image3} />
				<GalleryPhoto imgUrl={image4} />
				<GalleryPhoto imgUrl={image5} />
			</div>
		</div>
	)
}
