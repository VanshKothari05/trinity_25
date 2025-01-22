import { useEffect } from 'react'
import '../../CSS/AboutPage.css'
import image from '../../resources/images/principal_sir.jpg'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

const AboutPage = () => {
	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}, [])

	const youtubeURL = 'https://youtu.be/o6KPkHHZ194'

	return (
		<div className='about'>
			<Container>
				<div className='row custom-margin'>
					<div className='col-md-6 col-sm-12 col-lg-6'>
						<div className='abt-img'>
							<img title='Hari Sir' alt='Hari-Sir-Portrait' src={image} />
						</div>
					</div>
					<div className='col-md-6 col-sm-12 col-lg-6'>
						<div className='abt-desc'>
							<div className='sec-tl'>
								<h2 className='title'> About our Principal</h2>
								<h5 className='title'> Dr. Hari Vasudevan </h5>
							</div>
							<p>
								In a short span of 28 years, Dwarkadas J. Sanghvi College of Engineering
								(DJSCE), an Autonomous Institution, affiliated to the University of
								Mumbai and owned by SVKM has come a long way and has made its impact
								felt not only in the country, but also abroad. Our students have been
								performing exceedingly well in national and globally competent
								multinational companies and also in the universities in India and abroad
								as they pursue their higher education.
							</p>
						</div>
					</div>
				</div>
				<div className='row custom-margin2'>
					<div className='col-md-6 col-sm-12 col-lg-6'>
						<div className='abt-desc2'>
							<h2 className='title'>Glimpse of our Fest</h2>
							<p>
								Trinity embodies the spirit of D.J. Sanghvi as the most anticipated and
								cherished annual socio-cultural, sports festival. Trinity is coalescence
								of innovation and technology, festivities and social responsibilities
								and competitive streak of sports. The Grandeur of Trinity is sure to
								attract students not only from Mumbai but from colleges from all around
								the world.
							</p>
							<p>
								{' '}
								The coveted IDPT trophy will be fought for by the students of the
								college. The department who shows exemplary teamwork and dedication will
								be the ones to lift this trophy. We are bound to have clashes between
								departments during the fest but that will just make everyone hungrier to
								win it. The winner will take home bragging rights for a year whereas
								those who don’t win will have that extra bit of motivation for next
								year. But remember the most important thing is to participate because as
								the saying goes you either win or you learn.
							</p>
							<h4 className='title'>
								{' '}
								Say out loud to the city, DJ is back with Trinity !!!{' '}
							</h4>
						</div>
					</div>
					<div className='col-md-6 col-sm-12 col-lg-6'>
						<div className='abt-vid'>
							<ReactPlayer url={youtubeURL} autoPlay={true} className='video' />
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default AboutPage
