/* eslint-disable */

import React, { useContext } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'
import {AppContext} from '../Context/CartContext'
import {LocationContext} from '../Context/LocationContext'
import {PickupOrDeliveryContext} from '../Context/PickupOrDelivery'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SearchLocation = () => {
  const classes = useStyles();

const [coordinates, setCoordinates] = useContext(LocationContext);
const [isForDelivery, setIsForDelivery] = useContext(PickupOrDeliveryContext)


  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const [cart] = useContext(AppContext)
 

 

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
       console.log("📍 Coordinates to send from search bar ", { lat, lng });
       setCoordinates({
        center: {lat: lat,lng: lng},
        zoom: 11
      })
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
   
return (



<>
<div className=''>

  <div className='tag-div'>
    <div className='input-wrapper'>
    <form className={classes.root} noValidate autoComplete="off" id="search-form">
     <input
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="What's your address?"
                    type="text" name="name" className="question"
                    id="nme" required autoComplete="off"
                  /> 
    
    </form>
    <form>
        <div className='input-btn'>
                  {/* We can use the "status" to decide whether we should display the dropdown or not */}
                  {status === "OK" && <ul className='question'>{renderSuggestions()}</ul>}
        </div>
          <label htmlFor="nme"><span></span></label>
        </form> 
          <div className='show-map-btns'>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
               <Button onClick={() => setIsForDelivery(true)}  > delivery</Button>    
               <Button onClick={() => setIsForDelivery(false)} >pickup</Button>
          </ButtonGroup>
      </div>
      </div>
     
    </div>
  </div>
</>
    );
};

export default SearchLocation;
