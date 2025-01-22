// import { useState } from 'react'
import '../index.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

function Socials() {
	return (
		<>
			<div className='socials'>
				<div title='Instagram' className='icon'>
					<a href='https://www.instagram.com/djsce.trinity/'>
						<InstagramIcon />
					</a>
				</div>
				<div title='Facebook' className='icon'>
					<a href='https://www.facebook.com/people/Djsce-Trinity/100005340645201/'>
						<FacebookIcon />
					</a>
				</div>
				<div title='Twitter' className='icon'>
					<a href='https://twitter.com/djscetrinity'>
						<TwitterIcon />
					</a>
				</div>
				<div title='YouTube' className='icon'>
					<a href='https://www.youtube.com/@djscetrinity1543/videos'>
						<YouTubeIcon />
					</a>
				</div>
			</div>
		</>
	)
}

export default Socials
