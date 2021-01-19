/* eslint-disable */

import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import {LocationContext} from '../../Context/LocationContext'
import { PickupOrDeliveryContext } from '../../Context/PickupOrDelivery';
import DB from '../../DB/db'


// const MyMarker = ({ text }) => <div>{text}</div>;

// const StoreMarker = (props) => {
//   const { color, name, store, selected, setSelected } = props;

// console.log('props from StoreMarker', selected)
//   return (
//     <div className="marker"
//       style={{ backgroundColor: color, cursor: 'pointer'}}
//       title={name}
//     >
//       {<InfoWindow store={store} />}
//     </div> 
    
//   );
// };

// const handleClose = () => {
//   console.log('closed click')
// }


// // InfoWindow component
// const InfoWindow = (props) => {
//   const infoWindowStyle = {
//       position: 'relative',
//       top: '-110px',
//       left: '-100px',
//       width: 600,
//       backgroundColor: 'white',
//       boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
//       padding: 10,
//       fontSize: 14,
//       zIndex: 100,
//       paddingRight:' 0px',
//       paddingBottom: '0px',
//       maxWidth: '648px',
//       maxHeight: '297px',
//       minWidth: '0px',
//       position: 'absolute',
//       boxSizing: 'border-box',
//       overflow: 'hidden',
//       top: 0,
//       left: 0,
//       transform: 'translate(-50%,-100%)',
//       backgroundColor: 'white',
//       borderRadius: '8px',
//       padding: '12px',
//       boxShadow: '0 2px 7px 1px rgba(0,0,0,0.3)',
//       height:'50px'
  
//   };
//   const infoWindowClose = {
//       float: 'right',
//       fontSize: 11,
//   };
//   console.log('props from Infowindow',props.store)
//   return (
//     <>
//     <button onClick={handleClose}>X</button>
//       <div style={infoWindowStyle}> {props.store.name} </div>
//       </>
//   );
// };


function MapFinder  () {
  const [coordinates, _, nearby] = useContext(LocationContext);
  const [isForDelivery, setIsForDelivery] = useContext(PickupOrDeliveryContext);
  const [ selected, setSelected ] = useState(false);
  const db = DB;
  const [selectedMarker, setSelectedMarker] = useState('');


  
  // const MyMarker = ({ text }) => <div>{text}</div>;

  const StoreMarker = (props) => {
    const { color, name, store   } = props;

    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}   
        onClick={()=>console.log('clicky from StoreMarker', store, setSelected(!selected), selected)}
         >
        {<InfoWindow store={store} />}
      </div> 
      
    );
  };
  

  
  // InfoWindow component
  const InfoWindow = (props) => {
    const infoWindowStyle = {
        position: 'relative',
        top: '-110px',
        left: '-100px',
        width: 260,
        backgroundColor: 'grey',
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
        height:'120px'
    
    };
    const infoWindowClose = {
        float: 'right',
        fontSize: 11,
    };
   
    return (
     
     <>
     <div style={infoWindowStyle}>
            <button onClick={()=>console.log('clicky from button', props.store)}>X</button>
      <div style={infoWindowStyle}>
            <div style={infoWindowClose} onClick={setSelectedMarker('')}>X</div>
            <div style={{ fontSize: 16 }}>
              <h1>hello</h1>
            </div>

        </div>
   </div>
   </>
    );
  };
  
  


  // const _onChildClick = (store) => {
  //   console.log('clicked child', store)
  //   setSelected(store);
  //   console.log('Store from onChildClick', store)
  // };


  const mapForDelivery = (
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API}}
            defaultCenter={coordinates.center}
            defaultZoom={coordinates.zoom}
            // onChildClick={() =>_onChildClick()}
            
          >
  
           {/* <MyMarker
            lat={coordinates.center.lat}
            lng={coordinates.center.lng}
            text= 'Store' /> */}

            
  
            {nearby ? nearby.map( store => <StoreMarker
              lat={store.Address.lat}
              lng={store.Address.lng}
              color="blue"
              name={store.name}
              store={store}
              
            /> ):null}
          
          {selected? <InfoWindow />:null}
          
          {console.log('selected at map',selected)}
          </GoogleMapReact>
        </div> );



  const mapForPickup = (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API}}
          defaultCenter={coordinates.center}
          defaultZoom={coordinates.zoom}
        >
        

         {/* <MyMarker
          lat={coordinates.center.lat}
          lng={coordinates.center.lng}
          text= 'Store' /> */}

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
//               <Marker key={store.id} 
//                 
//                 onClick={() => setSelected(store)}
//               />
//               )
//             })
//          }
//         {
//             selected && 
//             (
//               <InfoWindow
//    
//               clickable={true}
//               onCloseClick={() => setSelected({})}
//             >
//               <p>{selected.name}</p>
//             </InfoWindow>
//             )
//          }
//      