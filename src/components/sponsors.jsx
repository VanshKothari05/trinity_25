import '../index.css'
import SponsorCard from './SponsorCard'
//import SponsorButton from './SponsorButton'
import { useEffect } from 'react'

let platinumSponersImg = ["Asmi", "GreenMonk", "CakesAndCrumbs"]
let GoldSponersImg = ["HouseOfBrahma", "Idlish", "SanaHealthFirst"]
let SilverSponersImg = ["PinItUp", "Kpop", "SHF_health"]
let BronzeSponersImg = []

let titles = ["PLATINUM", "GOLD", "SILVER", "BRONZE"]
let colors = ["silver", "gold", "grey", "brown"]


function Sponsors() {
	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}, [])
	return (
		<div className='sponsor-background'>
			<div>
				{/* <img className='sponsor-bg' src={image} alt='' /> */}
				{/*<SponsorButton />*/}
				<div className='sponsorContainer'>
					<h2
						style={{
							paddingTop: '30px',
							color: 'rgba(255, 235, 57, 0.6)',
							fontWeight: 'bolder',
							marginBottom: '-40px',
						}}
					>
						OUR SPONSORS
					</h2>
					<div className='sponsorType'>
						<section style={{ scrollMarginTop: '100px' }} id='platinum'>
							<SponsorCard title={titles} color={colors} plat={platinumSponersImg} gold={GoldSponersImg} silver={SilverSponersImg} bronze={BronzeSponersImg} />
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Sponsors
