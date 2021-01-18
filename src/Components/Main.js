import React from 'react';
// import {Link} from 'react-router-dom';
import DB from '../DB/db.json';
import Tags from './Tags';
import  Bakery from './Bakery';
import SearchLocation from './SearchLocation'
import Landing from './Landing.js';
import Footer from './Footer';
import Parallax from 'react-rellax';



function Main () {

const db = DB; // const result = await db.search(tag ALL)
 
return (
    <>
          <Parallax speed={2}> 
            <Landing />
            <SearchLocation />
          </Parallax>
          <Tags />
          <Bakery db={db}/>
          <Footer />
          
    </>
  ); 
}

export default Main;
