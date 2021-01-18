/* eslint-disable */

import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import {LocationContext} from '../../Context/LocationContext'
import { PickupOrDeliveryContext } from '../../Context/PickupOrDelivery';
import DB from '../../DB/db'




const MyMarker = ({ text }) => <div>{text}</div>;
const PopUp = ({ text }) => <div>{text}</div>;
const StoreMarker = (props) => {
  const { color, name } = props;

  return (
    <div className="marker"
      style={{ backgroundColor: color, cursor: 'pointer'}}
      title={name}
    />
  );
};




// InfoWindow component
const InfoWindow = (props) => {

  const infoWindowStyle = {
      position: 'relative',
      top: '-110px',
      left: '-100px',
      width: 300,
      backgroundColor: 'white',
      boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
      padding: 10,
      fontSize: 14,
      zIndex: 100,
      paddingRight:' 0px',
      paddingBottom: '0px',
      maxWidth: '648px',
      maxHeight: '297px',
      minWidth: '0px',
      position: 'absolute',
      boxSizing: 'border-box',
      overflow: 'hidden',
      top: 0,
      left: 0,
      transform: 'translate(-50%,-100%)',
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '12px',
      boxShadow: '0 2px 7px 1px rgba(0,0,0,0.3)',
  
  };

 

  const infoWindowClose = {
      float: 'right',
      fontSize: 11,
  };

  console.log((props))
  return (
      <div style={infoWindowStyle}>
       hello
      </div>
  );
};





function MapFinder  () {
  const [coordinates, _, nearby] = useContext(LocationContext);
  const [isForDelivery, setIsForDelivery] = useContext(PickupOrDeliveryContext);
  const [ selected, setSelected ] = useState(null);
  const db = DB;

  const _onChildClick = (store) => {
    console.log('clicked')
    setSelected(store);
    console.log(store)
  };

  const mapForDelivery = (
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API}}
            defaultCenter={coordinates.center}
            defaultZoom={coordinates.zoom}
            onChildClick={_onChildClick}
          >
  
           <MyMarker
            lat={coordinates.center.lat}
            lng={coordinates.center.lng}
            text= 'Store' />
  
            {nearby ? nearby.map( store => <StoreMarker
              lat={store.Address.lat}
              lng={store.Address.lng}
              color="blue"
              text='Bakery'
            /> ):null}
          
          {selected && <InfoWindow /> }

          </GoogleMapReact>
        </div> );



  const mapForPickup = (
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

          {db ? db.map(store => <StoreMarker
            lat={store.Address.lat}
            lng={store.Address.lng}
            color="blue"
            name='Bakery'
          />):null}

         
        </GoogleMapReact>
      </div>
    );


 return (
   <>
  {isForDelivery? mapForDelivery : mapForPickup}   
  </>
   
    );
 }

 
export default MapFinder;




//(
//     ...
//          {
//             stores.map(store => {
//               return (
//               <Marker key={store.name} 
//                 position={store.location}
//                 onClick={() => onSelect(store)}
//               />
//               )
//             })
//          }
//         {
//             selected.location && 
//             (
//               <InfoWindow
//               position={selected.location}
//               clickable={true}
//               onCloseClick={() => setSelected({})}
//             >
//               <p>{selected.name}</p>
//             </InfoWindow>
//             )
//          }
//      