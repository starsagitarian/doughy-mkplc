


// // InfoWindow component
// const InfoWindow = (props) => {

//   const infoWindowStyle = {
//       position: 'relative',
//       top: '-110px',
//       left: '-100px',
//       width: 300,
//       backgroundColor: 'white',
//       boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
//       padding: 10,
//       fontSize: 14,
//       zIndex: 100,
//   };

//   const infoWindowClose = {
//       float: 'right',
//       fontSize: 11,
//   };

//   return (
//       <div style={infoWindowStyle}>
//           <div style={infoWindowClose} onClick={setSelectedMarker('')}>X</div>
//           <div style={{ fontSize: 16 }}>
//               Marker ID: {props.id} <br/>
//               Latitude: {props.lat} <br/>
//               Longitude: {props.lng} <br/>
//           </div>

//       </div>
//   );
// };

// const [selectedMarker, setSelectedMarker] = useState('');

// ....

// const _onChildClick = (key, childProps) => {
//     setShowInfoView(!showInfoView);
//     setSelectedMarker(childProps.id);
// };


// return (

//     ....

//     <GoogleMapReact
//         bootstrapURLKeys={{
//             key: process.env.REACT_APP_GOOGLE_KEY
//         }}
//         zoom={zoom}
//         yesIWantToUseGoogleMapApiInternals
//         onGoogleApiLoaded={({map}) => {
//             mapRef.current = map;
//         }}
//         onChange={({zoom, bounds}) => {
//             setZoom(zoom);
//             setBounds([
//                 bounds.nw.lng,
//                 bounds.se.lat,
//                 bounds.se.lng,
//                 bounds.nw.lat
//             ]);
//         }}
//         onChildClick={_onChildClick}
//     >

//         {clusters.map(cluster => {
//             const [longitude, latitude] = cluster.geometry.coordinates;
//             const
//                 {
//                     cluster: isCluster,
//                     point_count: pointCount
//                 } = cluster.properties;

//             if (isCluster) {
//                 return (
//                     ....
//                 )
//             }
//             if (!isCluster) {
//                 return (
//                     <Marker
//                         key={cluster.properties.id}
//                         lng={longitude}
//                         lat={latitude}
//                         show={showInfoView}
//                         marker={cluster}
//                         id={cluster.properties.id}
//                     >
//                         <div>
//                             <Fragment>
//                                 <RoomIcon
//                                     color={"secondary"}
//                                     cursor={"pointer"}
//                                     onClick={() => {
//                                         mapRef.current.panTo({
//                                             lat: latitude,
//                                             lng: longitude
//                                         });
//                                         onMarkerClick(props);
//                                     }}
//                                 />
//                                 {selectedMarker === cluster.properties.id &&
//                                     <InfoWindow
//                                         id={cluster.properties.id}
//                                         lng={longitude}
//                                         lat={latitude}
//                                     /> }
//                             </Fragment>
//                         </div>
//                     </Marker>
//                 );
//             }
//         })}

//     </GoogleMapReact>

// ...

// )




// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';


//   export function getEvents () {
//     return fetchRequest(`posts`);
//   };

//   export function postEvents (body) {
//     return fetchRequest(`events`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
//       body: JSON.stringify(body)
//     });
//   };

//   function fetchRequest (url, options) {
//     return fetch(`${BASE_URL}${url}`, options)
//       .then(res => res.status < 400 ? res : Promise.reject(res))
//       .then(res => res.status !== 204 ? res.json() : res)
//       .catch(err => {
//         console.log(`${err.message} while fetching /${url}`)
//       });
//   };




// export default ApiService;
