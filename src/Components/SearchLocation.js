import React, {createContext, useState, useContext} from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'
import {AppContext} from '../Context/CartContext'

const SearchLocation = () => {
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
  
  // const ref = useOnclickOutside(() => {
  //   // When user clicks outside of the component, we can dismiss
  //   // the searched suggestions by calling this method
  //   clearSuggestions();
  // });

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
        console.log("📍 Coordinates: ", { lat, lng });
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
    <div className='input-wrapper'>
        <form>
              {/* <div className='search-input-wrapper'> */}
              <div className='input-btn'>
                  <input
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="What's your address?"
                    type="text" name="name" className="question"
                    id="nme" required autoComplete="off"
                  />
                  {/* We can use the "status" to decide whether we should display the dropdown or not */}
                  {status === "OK" && <ul className='question'>{renderSuggestions()}</ul>}

                <Button className="search-btn"  color="primary" size="small">Go!</Button>
            </div>
           <label for="nme"><span></span></label>
        {/* <input type="submit" value="Submit!" /> */}
        </form>
        <div className="search-bar-cart">
            <ul>
              <li className='top-right-link'><Link to="/Cart">Cart: Items {cart.length}</Link></li>
            </ul>
        </div>
    </div>
</div>
</>
    );
};

export default SearchLocation;
