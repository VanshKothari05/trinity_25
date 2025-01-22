// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

// const Map = () => {
//     return(
//         <GoogleMap 
//             defaultZoom={10}
//             defaultCenter={{ lat: 19.107460, long: 72.837500}}
//         />
//     )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

const LocationMap = () => {
    return (
        <div style={{ width: '100%', height: '60vh', marginTop: '-30px' }}>
            {/* <WrappedMap
                googleMapURL={`https://maps.google.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places/&key`}
                loadingElement={<div style={{ height: '100%' }}/>}
                containerElement={<div style={{ height: '100%' }}/>}
                mapElement={<div style={{ height: '100%' }}/>}
            /> */}

            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d868.8613116255063!2d72.83670924722993!3d19.107485771248633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1667633793481!5m2!1sen!2sin" width="100%" height="100%" style={{ border: '0' }} loading="lazy"></iframe>

        </div>
    )
}

export default LocationMap;