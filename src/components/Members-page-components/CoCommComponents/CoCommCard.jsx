import React from 'react'

export default function CoCommCard(props) {
    return (
        <div >
            <div className="card bg-transparent co-comm-card" >
                <img className="member-card-img" src={props.imgUrl} alt="CardImageCap" />
            </div>
        </div>
    )
}
