import '../index.css'
import SponsorImageCard from './SponsorImageCard'

import GreenMonk from "../images/sponsors/GreenMonk.jpg"
import Asmi from "../images/sponsors/Asmi.jpg"
import CakesAndCrumbs from "../images/sponsors/CakesAndCrumbs.jpg"
import HouseOfBrahma from "../images/sponsors/HouseOfBrahma.jpg"
import Idlish from "../images/sponsors/Idlish.jpg"
import SanaHealthFirst from "../images/sponsors/SanaHealthFirst.jpg"
import PinItUp from "../images/sponsors/PinItUp.jpg"
import Kpop from "../images/sponsors/Kpop.jpg"
import SHF_health from "../images/sponsors/SHF_health.jpg"

function SponsorCard({ title, color, plat, gold, silver, bronze }) {


	return (
		<div>
			<div style={{ marginTop: '100px' }}>
				<h2
					style={{
						color: color[0],
					}}
					className='sponsorType'
				>
				{/*	<div className='contains-title'>{title[0]}</div>*/}
				</h2>
				{/* <img className='sponsorDivision' src={image} /> */}
				<div style={{ marginTop: '50px' }}>

					<SponsorImageCard color={color[0]} imgurl={Asmi} sponserName={plat[0]} />
					<SponsorImageCard color={color[0]} imgurl={GreenMonk} sponserName={plat[1]} />
					<SponsorImageCard color={color[0]} imgurl={CakesAndCrumbs} sponserName={plat[2]} />
				</div>
			</div>
			<div style={{ marginTop: '100px' }}>
				<h2
					style={{
						color: color[1],
					}}
					className='sponsorType'
				>
				{/*	<div className='contains-title'>{title[1]}</div>*/}				
				</h2>
				{/* <img className='sponsorDivision' src={image} /> */}
				<div style={{ marginTop: '50px' }}>

					<SponsorImageCard color={color[1]} imgurl={HouseOfBrahma} sponserName={gold[0]} />
					<SponsorImageCard color={color[1]} imgurl={Idlish} sponserName={gold[1]} />
					<SponsorImageCard color={color[1]} imgurl={SanaHealthFirst} sponserName={gold[2]} />
				</div>
			</div>
			<div style={{ marginTop: '100px' }}>
				<h2
					style={{
						color: color[2],
					}}
					className='sponsorType'
				>
				{/*	<div className='contains-title'>{title[2]}</div>*/}
				</h2>
				{/* <img className='sponsorDivision' src={image} /> */}
				<div style={{ marginTop: '50px' }}>

					<SponsorImageCard color={color[23]} imgurl={PinItUp} sponserName={silver[0]} />
					<SponsorImageCard color={color[23]} imgurl={Kpop} sponserName={silver[1]} />
					<SponsorImageCard color={color[23]} imgurl={SHF_health} sponserName={silver[2]} />
				</div>
			</div>
			<div style={{ marginTop: '100px' }}>
				<h2
					style={{
						color: color[3],
					}}
					className='sponsorType'
				>
				{/*	<div className='contains-title'>{title[3]}</div>*/}
				</h2>
				{/* <img className='sponsorDivision' src={image} /> */}
				<div style={{ marginTop: '50px' }}>

					<h2>Coming soon !</h2>
				</div>
			</div>

		</div>
	)
}

export default SponsorCard
