/* eslint-disable */

import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import {LocationContext} from '../../Context/LocationContext'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// function MapFinder  () {
//   const [coordinates, setCoordinates] = useContext(LocationContext);
//   console.log('coordinates received in Map',coordinates);
  
//   const  defaultProps = {
//     center: {lat: 47.95,lng: 8.33},
//     zoom: 5
//   };
//   // console.log(coordinates);
//   // const latitude = coordinates.lat;
//   // const longitude = coordinates.lng;
//   // const mapCoords = {latitude, longitude}


//   const showMap = <div style={{ height: '100vh', width: '100%' }}>
//   <GoogleMapReact
//     bootstrapURLKeys={{ key: process.env.API}}
//     defaultCenter={defaultProps.center}
//     defaultZoom={defaultProps.center.zoom}
//   >
//     <AnyReactComponent
//       lat={59.955413}
//       lng={30.337844}
//       text="My Position"
//     />
//   </GoogleMapReact>
// </div>

// const noCoords = <div><h1>Please enter a valid address</h1></div>


function MapFinder  () {

  const [coordinates, setCoordinates] = useContext(LocationContext);

  console.log('at map component', coordinates)
    
  const defaultProps = {
    center: {lat: 37.95,lng: 18.33},
    zoom: 11
  };
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API}}
          defaultCenter={coordinates.center}
          defaultZoom={coordinates.zoom}
        >
          <AnyReactComponent
            lat={coordinates.center.lat}
            lng={coordinates.center.lng}
            text="My Bakery"
          />
        </GoogleMapReact>
      </div>
    );
  }

 
export default MapFinder;