import React, {useState} from 'react';


export default function Landing () {
 const [value, setValue] = useState('');
 const [latitude, setLatitude] = useState();



 function handleChange (e) {
  e.preventDefault();
  setValue(e.target.value)

   const latitude = async function () {
     const lat = await fetch(`'http://open.mapquestapi.com/geocoding/v1/address?key=KEY&location=${value}'`).then(res => console.log(res));
    return lat

   } 
 
 
}
 
    return (
      <div className="bg_image" >
        <h1 align="center">Doughy</h1>
        <div className='landing-search-div'> 
        <h1 align="center" className="landing-span" display="block">Get Fresh Baked Goods</h1>
        <input align="center" className="landing-search" type="text" aria-label="Your delivery address" placeholder={value}  onChange={handleChange}></input>
        </div>
      </div>
    );
}

