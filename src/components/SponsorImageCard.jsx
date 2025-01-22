import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function SponsorImageCard({ color, imgurl, sponserName }) {
	let boxVariant = {}
	const isMobile = window.innerWidth < 700

	if (!isMobile) {
		boxVariant = {
			visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
			hidden: { opacity: 0, y: 100, transition: { duration: 0.4 } },
		}
	} else {
		boxVariant = {
			visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
			hidden: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
		}
	}

	const sponsorBackgroundVariant = {
		rest: { translateY: 0, transition: { duration: 0.4 } },
		hover: { translateY: '-10px', transition: { duration: 0.4 } },
	}

	const textHoverVariant = {
		hover: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, delay: 0.2 },
		},
		rest: { opacity: 0, y: 3, transition: { duration: 0.4 } },
	}

	const hoverOverlayVariant = {
		rest: { opacity: 0, height: 0, transition: { duration: 0.4 } },
		hover: { opacity: 0.7, height: '100%', transition: { duration: 0.4 } },
	}

	const control = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView) {
			control.start('visible')
		}
	}, [control, inView])

	return (
		<AnimatePresence>
			<motion.div
				ref={ref}
				variants={boxVariant}
				initial='hidden'
				animate={control}
				exit='hidden'
				className='sponsor-image-card'
				style={{
					border: `5px solid ${color}`,
					boxShadow: `0px 0px 10px ${color}`,
				}}
			>
				<motion.div
					className='background'
					initial='rest'
					whileHover='hover'
					onTap='hover'
					animate='rest'
					exit='rest'
					variants={sponsorBackgroundVariant}
				>
					<img className='sponsers-img' src={imgurl} alt='' />
					<motion.div variants={hoverOverlayVariant} className='onHover'>
						<motion.h4 className='sponsors-name' variants={textHoverVariant}>
							{sponserName}
						</motion.h4>
					</motion.div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}
export default SponsorImageCard
