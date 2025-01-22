import React from 'react'

function MemberOptionSwitch(props) {

    // let CoreBtnEffects = ["core-btn"]
    // let CoCommBtnEffects = ["Co-Comm-btn"]


    return (
        <div className='option-container'>
            <button id='core-btn' className="core-btn" onClick={props.CheckOption}>Core</button>
            <button id='Co-Comm-btn' className="Co-Comm-btn" onClick={props.CheckOption}>Co-Committee</button>
        </div>
    )
}

export default MemberOptionSwitch;