import React, { useEffect } from 'react'
import { useState } from 'react';
import InfoCardsContainer from './InfoCardsContainer';
import MemberOptionSwitch from './MemberOptionSwitch'

function MembersPage() {
	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}, [])
	const [option, setOption] = useState("core-btn")
	var title = "CORE";
	function CheckOption(event) {
		setOption(event.currentTarget.id);
	}
	if (option === "core-btn") {
		title = "CORE";
	}
	else {
		title = "CO-COMMITTEE"
	}
	return (
		<div>
			<div className='members-page-container'>
				<MemberOptionSwitch CheckOption={CheckOption} />
				<h2 className='heading-title'>{title}</h2>
				<InfoCardsContainer title={title} />
			</div>
		</div>
	)
}

export default MembersPage
