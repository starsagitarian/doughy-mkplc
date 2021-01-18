/* eslint-disable */

import React,  {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import DB from '../DB/db';
import MapFinder from './Map/Map'
import {Button} from '@material-ui/core';
import LocationProvider from '../Context/LocationContext';



const Bakery = () => {
  const [isClicked, setIsClicked] = useState(false);
  // const [coordinates, setCoordinates] = useContext(LocationProvider);
  const db= DB;
 
  const notMap = <div> {/* {db.length?<h2 className='list-head'>Hello {db.length} Bakeries Available</h2>:null}  */}
  {<div className='Bakery-Main'> 
      <div className='Bakery'> 
        {db.length? db.map((bakery) => {return (
            <Link to={'/bakery/' + bakery.id} url={bakery.id} className="Link-Class" key={bakery.id}>
            <div className="ekrUEE">
                <div className='Single-Bakery-Card'>
                    <div className="bakery-card-img">
                    
                    </div>
                    <div className="bakery-card-info">
                      <li key={bakery.id} className='bakery-list'>
                        {/* <span className='repo-text'><h1>{bakery.name}</h1></span><br></br>
                        <span className='repo-text'><h5>{bakery.Description} </h5></span> */}
                        <h1>{bakery.name}</h1>
                        <h5>{bakery.Description} </h5>
                        
                      </li>
                    </div>
                </div>
            </div>
            </Link>
        )}): null} 
      </div>

    </div>
  }
 </div>;

 const map = <MapFinder /> ;

  const handleMap = () => {
    setIsClicked(true);
    
  }

  const handleList = () => {
    setIsClicked(false);
    
  }

  return ( 


<>
  <Button onClick={() => handleMap()} color="primary" size="small" variant="contained">See Map</Button>
   <Button onClick={() => handleList()} color="primary" size="small" variant="contained">See List</Button>
   {isClicked? map:notMap}
 
</>
  //   <>
  //   {/* {db.length?<h2 className='list-head'>Hello {db.length} Bakeries Available</h2>:null}  */}
  //   {<div className='Bakery-Main'> 
  //       <div className='Bakery'> 
  //         {db.length? db.map((bakery) => {return (
  //             <Link to={'/bakery/' + bakery.id} url={bakery.id} className="Link-Class" key={bakery.id}>
  //             <div className="ekrUEE">
  //                 <div className='Single-Bakery-Card'>
  //                     <div className="bakery-card-img">
                      
  //                     </div>
  //                     <div className="bakery-card-info">
  //                       <li key={bakery.id} className='bakery-list'>
  //                         {/* <span className='repo-text'><h1>{bakery.name}</h1></span><br></br>
  //                         <span className='repo-text'><h5>{bakery.Description} </h5></span> */}
  //                         <h1>{bakery.name}</h1>
  //                         <h5>{bakery.Description} </h5>
                          
  //                       </li>
  //                     </div>
  //                 </div>
  //             </div>
  //             </Link>
  //         )}): null} 
  //       </div>
    
  //     </div>
  // }
  // </button>
   );
}
 
export default Bakery;