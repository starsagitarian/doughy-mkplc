import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DB from '../DB/db.json';
import Tags from './Tags';

import IMG from '../public/temp-landing.jpg'


function Main () {

// const [isTagged, setIsTagged] = 'All'

// const tags = ['All', 'Bread', 'Pastries', 'Gluten-Free']

const db = DB; // const result = await db.search(tag ALL)


return (

<>
      <Tags />
        { <div className='Bakery-Main'> 
        {db.length?<h2 className='list-head'>{db.length} Bakeries Available</h2>:null} 
         
         <div className='Bakery'> 
              {db.length? db.map((bakery) => {return (
                  <Link to={'/bakery/' + bakery.id} url={bakery.id} className="Link-Class" key={bakery.id}>
                  <div className='Single-Bakery-Card'>
                      <li key={bakery.id} className='bakery-list'>
                         {/* <img className='bakery-img'src={IMG}></img> */}
                        <span className='repo-text'>{bakery.name} </span><br></br>
                        <span className='repo-text'>{bakery.Description} </span>
                       </li>
                  </div>
                  </Link>
              )}): null} 
            </div>
      </div>}
 </>

 );
  
}

{/* <>
  <Tags/>
  <div className='Bakery-Main'>
  {db.length?<h2 className='list-head'>{db.length} Bakeries Available</h2>:null} 
  <div className='Bakery'>
  <GridList cellHeight={160}  cols={3}>
  {db.length? db.map((bakery) => {return (

<GridListTile key={bakery.id} cols={1}>
          <Link to={'/bakery/' + bakery.id} url={bakery.id} className="Link-Class" key={bakery.id}>
          <ProductCard db={db}/>
        </Link>
</GridListTile>)}): null} 

</GridList>

  </div>
  </div>
</> */}

    
    




export default Main;

// useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //             .then(response => response.json())
  //             .then(data => setData(data))
  // }, [])
  
  {/* { <div className='Bakery-Main'>
  {data.length?<h2 className='list-head'>Available Data {db.length}</h2>:null}         <div className='Bakery'>
  {data.length? data.map((item) => {return (
    <Link to={'/' + item.id} url={item.id}>
    <li key={item.id} className='bakery-list'>
    <span className='repo-text'>{item.title} </span><br></br>
    <span className='repo-text'>{item.id} </span>
    </li>
    </Link>
    );
  }): null}    
  </div>
</div> } */}


                            {/* {db.length && db.map(item => {return(
                              <p>{item.Name}</p>
                            )})} */}