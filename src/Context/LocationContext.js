/* eslint-disable */

import React, {createContext, useState, useEffect} from 'react';
import DB from '../DB/db';

export const LocationContext = createContext();

// {coordinates.center}
// {coordinates.zoom}

// we had to hard code this object
const LocationFromLocalStorage = {
  center: { lat: 40.7182408, lng: -73.9902957 },
  zoom: 12,
};

const db = DB;

const LocationProvider = (props) => {
  
  const [coordinates, setCoordinates] = useState(LocationFromLocalStorage);
  const [nearStores, setNearStores] = useState([]);
  const stores = db;
  const radius = 10000;

  function calculateDistance(pointA, pointB) {
    
    const lat1 = pointA.lat;
    const lon1 = pointA.lng;
    
    const lat2 = pointB.lat;
    const lon2 = pointB.lng;
    const R = 6371e3; // earth radius in meters
    const φ1 = lat1 * (Math.PI / 180);
    const φ2 = lat2 * (Math.PI / 180);
    const Δφ = (lat2 - lat1) * (Math.PI / 180);
    const Δλ = (lon2 - lon1) * (Math.PI / 180);
  
    const a = (Math.sin(Δφ / 2) * Math.sin(Δφ / 2)) +
              ((Math.cos(φ1) * Math.cos(φ2)) * (Math.sin(Δλ / 2) * Math.sin(Δλ / 2)));
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance; 
  }


  const nearby = stores.filter(store => {
    let distance = calculateDistance(coordinates.center, store.Address)
    return distance < radius ? true:false
  })


  useEffect(() => {
    localStorage.setItem('location', JSON.stringify(coordinates))
    setNearStores(nearby)
  }, [coordinates]);

  return ( 
    <LocationContext.Provider value={[coordinates, setCoordinates, nearby]}>
      {props.children}
    </LocationContext.Provider>
   );
}
 
export default LocationProvider; 
