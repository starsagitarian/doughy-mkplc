// import React, {useState} from 'react';


// export default function Landing () {
//  const [value, setValue] = useState('');
//  const [latitude, setLatitude] = useState();



//  function handleChange (e) {
//   e.preventDefault();
//   setValue(e.target.value)

 
 
// }
 
//     return (
//       <div className="bg_image" >
//         <h1 align="center">Doughy</h1>
//         <div className='landing-search-div'> 
//         <h1 align="center" className="landing-span" display="block">Get Fresh Baked Goods</h1>
//         <input align="center" className="landing-search" type="text" aria-label="Your delivery address" placeholder={value}  onChange={handleChange}></input>
//         </div>
//       </div>
//     );
// }

// import useOnclickOutside from "react-cool-onclickoutside";

import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";



const Landing = () => {
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
  
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;
 

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

    
    
    
    
    // return (
    //   <div>
    //     <input
    //       value={value}
    //       onChange={handleInput}
    //       disabled={!ready}
    //       placeholder="Where are you going?"
    //     />
    //     {/* We can use the "status" to decide whether we should display the dropdown or not */}
    //     {status === "OK" && <ul>{renderSuggestions()}</ul>}
    //   </div>
    // );



      return (
          <div className="bg_image" >
            <h1 align="center">Doughy</h1>
            <h1 align="center" className="landing-span" display="block">Get Fresh Baked Goods</h1>
            <div className='landing-search-div'></div>
            {/* <input align="center" className="landing-search" type="text" aria-label="Your delivery address" placeholder={value}  onChange={handleChange}></input> */}
          <div>
          <input
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Enter your address"
            align="center"
            className="landing-search"
            type="text" 
            />
          {/* We can use the "status" to decide whether we should display the dropdown or not */}
          {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
            
          </div>
        );
    
};


export default Landing