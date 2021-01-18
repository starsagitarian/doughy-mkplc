/* eslint-disable */

import React, {createContext, useState} from 'react';



export const LocationContext = createContext();

const LocationProvider = (props) => {
  const [coordinates, setCoordinates] = useState();


  
  return ( 
    <LocationContext.Provider value={[coordinates, setCoordinates]}>
      {props.children}
    </LocationContext.Provider>
   );
}
 
export default LocationProvider; 
