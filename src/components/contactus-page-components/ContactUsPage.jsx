import { useEffect } from 'react'
import LocationMap from './LocationMap'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import '../../CSS/ContactUs.css'

const ContactUsPage = () => {
	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}, [])

	return (
		<>
			<LocationMap />
			<div className='contact-us'>
				<Container>
					<div className='row'>
						<div className='col-12'>
							<div className='title'>Contact us</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-4 col-sm-12 col-lg-4'>
							<Card className='text-center upperCards'>
								<Card.Body>
									<Card.Title>CHAIRPERSON</Card.Title>
									<Card.Subtitle className='mb-2'>Lakshya Joshi</Card.Subtitle>
									<Card.Text>
										<a href='tel: +91 77100 58104'>+91 9136221976</a>
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<div className='title'>Help Line</div>
						</div>
					</div>
					<div className='row col-lg-8 m-auto'>
						<div className='col-md-6 col-sm-12 col-lg-6'>
							<Card className='text-center lowerCards'>
								<Card.Body>
									<Card.Title>Cooper Hospital</Card.Title>
									<Card.Text>022-26207254</Card.Text>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-6 col-sm-12 col-lg-6'>
							<Card className='text-center lowerCards'>
								<Card.Body>
									<Card.Title>Mumbai Police</Card.Title>
									<Card.Text>100</Card.Text>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-6 col-sm-12 col-lg-6'>
							<Card className='text-center lowerCards'>
								<Card.Body>
									<Card.Title>Fire Brigade</Card.Title>
									<Card.Text>112</Card.Text>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-6 col-sm-12 col-lg-6'>
							<Card className='text-center lowerCards'>
								<Card.Body>
									<Card.Title>Ambulance</Card.Title>
									<Card.Text>102</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
				</Container>
			</div>
		</>
	)
}

export default ContactUsPage
