import React from 'react'
import CCPcards from './CCPcards'
import CPcards from './CPcards'
import HODCards from './HODcards'
// import JtSecretaryCards from './JtSecretaryCards'
// import MentorsCards from './MentorsCards'
import SecretaryCards from './SecretaryCards'
import VCPcards from './VCPcards'

export default function CoreMembers() {
	return (
		<>
			<CPcards />
			<CCPcards />
			<VCPcards />
			<SecretaryCards />
			<HODCards />
		</>
	)
}
