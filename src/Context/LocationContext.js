/* eslint-disable */

import React, {createContext, useState, useEffect} from 'react';

export const LocationContext = createContext();

const LocationFromLocalStorage = JSON.parse(localStorage.getItem('location')) || '[]'

const LocationProvider = (props) => {

  const [coordinates, setCoordinates] = useState(LocationFromLocalStorage);


  useEffect(() => {
    localStorage.setItem('location', JSON.stringify(coordinates))
  }, [coordinates]);

  return ( 
    <LocationContext.Provider value={[coordinates, setCoordinates]}>
      {props.children}
    </LocationContext.Provider>
   );
}
 
export default LocationProvider; 
