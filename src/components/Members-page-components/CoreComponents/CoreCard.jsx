import React from 'react'
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";


export default function CoreCard(props) {
    return (
        <div >
            <div className="relative rounded-lg h-36 w-36 scale-100 object-cover mb-5 mx-4 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
                <img className="w-full h-full object-cover rounded-lg" src={props.imgUrl} alt="CardImageCap" />
                {/* <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.post}</p>
                    <a className="icon" href={props.fb}><FacebookIcon sx={{ color: "rgba(255, 235, 1, 1);" }} /></a>
                    <a className="icon" href={props.insta}><InstagramIcon sx={{ color: "rgba(255, 235, 1, 1);" }} /></a>
                    <a className="icon" href={props.linkdin}><LinkedInIcon sx={{ color: "rgba(255, 235, 1, 1);" }} /></a>

                </div> */}
            </div>
        </div>
    )
}
