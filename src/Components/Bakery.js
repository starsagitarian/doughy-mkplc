/* eslint-disable */

import React,  {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import DB from '../DB/db';
import MapFinder from './Map/Map'
import {Button} from '@material-ui/core';
import {LocationContext} from '../Context/LocationContext';
import { PickupOrDeliveryContext } from '../Context/PickupOrDelivery';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Bakery = () => {
  const classes = useStyles();
  const [isClicked, setIsClicked] = useState(false);
  const [isForDelivery, setIsForDelivery] = useContext(PickupOrDeliveryContext)
  const [coordinates, _, nearby] = useContext(LocationContext);

 
const db= DB;


const notMapPickup = <div>
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
                        <h1>{bakery.name}</h1>
                        <h5>{bakery.Description} </h5>
                      </li>
                    </div>
                </div>
            </div>
            </Link>
        )}): <p>No bakeries available for Pickup</p>} 
      </div>
    </div>
  }
 </div>;

const notMapDelivery = <div>
  {<div className='Bakery-Main'> 
      <div className='Bakery'> 
        {nearby.length? nearby.map((bakery) => {return (
            <Link to={'/bakery/' + bakery.id} url={bakery.id} className="Link-Class" key={bakery.id}>
            <div className="ekrUEE">
                <div className='Single-Bakery-Card'>
                    <div className="bakery-card-img">
                    
                    </div>
                    <div className="bakery-card-info">
                      <li key={bakery.id} className='bakery-list'>
                        <h1>{bakery.name}</h1>
                        <h5>{bakery.Description} </h5>
                      </li>
                    </div>
                </div>
            </div>
            </Link>
        )}): <p>Nothing Available for delivery</p>} 
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
  
    <div className='show-map-btns'>
        <div className='map-btn'>
        <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button onClick={() => handleMap()}  > map</Button>        <Button onClick={() => handleList()} >list</Button>
      </ButtonGroup>
  </div>
        </div>
        <div className='list-btn'>
           
        </div>
    </div>
    {isForDelivery?<div className='list-head'>{nearby.length?<h2> There are {nearby.length} Bakeries Available for Delivery</h2>:<p>Nothing available for Delivery</p>} </div>:<div className='list-head'>{db.length?<h2> There are {db.length} Bakeries Available for Pickup</h2>:<p>Nothing available for Pickup</p>} </div>}


    {/* <div className='list-head'>{db.length?<h2> There are {db.length} Bakeries Available</h2>:<p>Nothing available</p>} </div> */}

    {/* {isClicked? map:notMapPickup} */}
    {isForDelivery?<div>{isClicked?map:notMapDelivery}</div>:<div>{isClicked?map:notMapPickup}</div>}
    {/* {isClicked? map:notMapPickup}} */}
</>
  );
}
 
export default Bakery;