/* eslint-disable */

import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import {LocationContext} from '../../Context/LocationContext'
const MyMarker = ({ text }) => <div>{text}</div>;
const StoreMarker = ({ text }) => <div>{text}</div>;

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

  const [coordinates] = useContext(LocationContext);

  console.log('at map component', coordinates)
    
  const defaultProps = {
    center: {lat: 37.95,lng: 18.33},
    zoom: 11
  };

  // const cent = coordinates.center;

  // const dakota = {lat: 40.7767644, lng: -73.9761399};
  // const frick = {lat: 40.771209, lng: -73.9673991};
  // The markers for The Dakota and The Frick Collection
  // var mk1 = new storeMarker({position: dakota});
  // var mk2 = new storeMarker({position: frick});
  // console.log(distance)

    return (
      // Important! Always set the container height explicitly
     
      <div style={{ height: '100vh', width: '100%' }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API}}
          defaultCenter={coordinates.center}
          defaultZoom={coordinates.zoom}
        >

         <MyMarker
          lat={coordinates.center.lat}
          lng={coordinates.center.lng}
          text= 'Store' />

          <StoreMarker
            lat={coordinates.center.lat}
            lng={coordinates.center.lng}
            text="BakeryyyyyyyyYYYYYYYYYYYY"
          />

         
        </GoogleMapReact>
      </div>
   
    );
  }

 
export default MapFinder;