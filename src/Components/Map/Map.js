/* eslint-disable */

import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import {LocationContext} from '../../Context/LocationContext'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function MapFinder  () {
  const [coordinates, setCoordinates] = useContext(LocationContext);
  console.log('coordinates received',coordinates);
  
  const  defaultProps = {
    center: {
      lat: 47.95,
      lng: 8.33
    },
    zoom: 5
  };

  const showMap = <div style={{ height: '100vh', width: '100%' }}>
  <GoogleMapReact
    bootstrapURLKeys={{ key: process.env.API}}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
  >
    <AnyReactComponent
      lat={defaultProps.center.lat}
      lng={defaultProps.center.lng}
      text="My Position"
    />
  </GoogleMapReact>
</div>

const noCoords = <div><h1>Please enter a valid address</h1></div>


    return (
      coordinates?showMap:noCoords
    );
  }


export default MapFinder