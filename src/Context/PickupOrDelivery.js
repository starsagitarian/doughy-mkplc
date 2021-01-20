/* eslint-disable */

import React, {useState, createContext} from 'react';

export const PickupOrDeliveryContext = createContext();


export const PickupOrDelivery = (props) => {
const [isForDelivery, setIsForDelivery] = useState(true);


  return (  
    <PickupOrDeliveryContext.Provider value={[isForDelivery, setIsForDelivery]}>
       {props.children}
    </PickupOrDeliveryContext.Provider>
  );
}
 
