import React from 'react';
import {Link} from 'react-router-dom';
import DB from '../DB/db';





const Bakery = (props) => {
const db= DB;

  return ( 
    <>
     {/* {db.length?<h2 className='list-head'>Hello {db.length} Bakeries Available</h2>:null}  */}
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
  </>
   );
}
 
export default Bakery;