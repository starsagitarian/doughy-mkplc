import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DB from '../DB/db.json';
import Tags from './Tags';
import IMG from '../public/temp-landing.jpg';
import  Bakery from './Bakery';
import SearchLocation from './SearchLocation'
import Landing from './Landing.js';
import Footer from './Footer';
import Parallax from 'react-rellax';



function Main (props) {
// const [coords] = props.location.coords;
// const [isTagged, setIsTagged] = 'All'
// const tags = ['All', 'Bread', 'Pastries', 'Gluten-Free']
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
