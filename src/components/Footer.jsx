import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
	return (
		<div className="footer">
			<footer className="bg-black text-white py-8">
				{/* Explicitly ensure no background image */}
				<div 
					className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" 
					style={{ backgroundImage: 'none' }}
				>
					{/* Contact Us Section */}
					<div className="contact">
						<h3 className="text-lg font-bold mb-4">Contact Us</h3>
						<ul className="text-sm space-y-3">
							<li>📍 SVKM's Dwarkadas Jivanlal Sanghvi College of Engineering, Vile Parle, Mumbai.</li>
							<li>
								📧 Email: <a href="mailto:info@djsce.ac.in" className="text-yellow-400 hover:underline">info@djsce.ac.in</a>
							</li>
							<li>📞 Phone: <a href="tel:+912223612234" className="text-yellow-400 hover:underline">+91 22 2361 2234</a></li>
						</ul>
					</div>

					{/* Social Media Icons */}
					<div className="social-icons text-center">
						<h3 className="text-lg font-bold mb-4">Follow Us</h3>
						<div className="flex justify-center space-x-4">
							<a href="https://www.facebook.com/people/Djsce-Trinity/pfbid0xkYxq4deAaWKbAbCceQqJjhDSRqZzXNGYYfuY2zULVi3GVBBBD7XYxMQyzLx5kK7l/" className="text-blue-500 hover:text-white"><FacebookIcon /></a>
							<a href="https://www.instagram.com/djsce.trinity/" className="text-pink-500 hover:text-white"><InstagramIcon /></a>
							<a href="https://twitter.com/djscetrinity" className="text-blue-400 hover:text-white"><TwitterIcon /></a>
							<a href="https://www.youtube.com/@djscetrinity1543/videos" className="text-red-500 hover:text-white"><YouTubeIcon /></a>
						</div>
					</div>

					{/* Address or Footer Note */}
					<div className="text-sm text-center md:text-right">
						<h3 className="text-lg font-bold mb-4">Address</h3>
						<p>SVKM's Dwarkadas Jivanlal Sanghvi College of Engineering</p>
						<p>Vile Parle, Mumbai, India</p>
						<p>&copy; 2025 Trinity Fest. All Rights Reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
