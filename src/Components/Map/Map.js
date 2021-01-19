/* eslint-disable */

import React, { useContext, useState, useEffect } from 'react';
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



const StoreMarker = (props) => {
  const { color, store, setSelectedMarker, selectedMarker, selectedStore, nearby  } = props;
 
  // function changeSelectedMarker (id) {
  //   setSelectedMarker(id)
  //       console.log('selectedStore before set', selectedStore)
  //       setSelectedStore(selected[0])
  //       console.log('selectedStore after set', selectedStore)
  //     }

  return (
    <div className="marker"
      style={{ backgroundColor: color, cursor: 'pointer'}}
      onClick={()=> setSelectedMarker(store.id)}

      // return setSelectedStore(nearby.filter((store) => store.id == selectedMarker))}
      // onClick={() => changeSelectedMarker(store.id)}
       >
       
      { selectedMarker === store.id? <InfoWindow store={store} nearby={nearby} selectedStore={selectedStore} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker}/>: null}
     
      {/* {nearby.filter((store) => {
                if (store.id === selectedMarker) return <InfoWindow store={store.id} />
                } )} */}
    </div> 
    
  );
};


// InfoWindow component
const InfoWindow = (props) => {
  
  // selected = props.nearby.filter(store => store.id == selectedMarker)
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
      <button onClick={(e)=> {console.log('event', e.target); props.setSelectedMarker(() => -1 )}}>X</button>
      <h1>{props.store.name}</h1>
      {console.log(props.setSelectedMarker)}
      <div >
          {/* <div style={infoWindowClose} onClick={setSelectedMarker('')}>X</div> */}
          <div style={{ fontSize: 16 }}>
           
      </div>
      </div>
 </div>
 </>
  );
};


function MapFinder  () {
  const [coordinates, _, nearby] = useContext(LocationContext);
  const [isForDelivery, setIsForDelivery] = useContext(PickupOrDeliveryContext);
  const [ selected, setSelected ] = useState(false);
  const db = DB;
  const [selectedMarker, setSelectedMarker] = useState(3);
  const [selectedStore, setSelectedStore] = useState(nearby[0]);


  
  // const MyMarker = ({ text }) => <div>{text}</div>;


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
              
              store={store}
              setSelectedMarker={setSelectedMarker}
              selectedMarker = {selectedMarker}
              selectedStore = {selectedStore}
              nearby={nearby}
              
            /> ):null}
          
          
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