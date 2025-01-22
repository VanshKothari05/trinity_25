import React from 'react'
import CoCommMembers from './CoCommComponents/CoCommMembers';
import CoreMembers from './CoreComponents/CoreMembers';

export default function InfoCardsContainer(props) {
    if (props.title === "CORE") {
        return (
            <div>
                <CoreMembers />
            </div>
        )
    }
    else {
        return (
            <div>
                <CoCommMembers />
            </div>
        )
    }

}
