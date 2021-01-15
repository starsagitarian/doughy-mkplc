import React from 'react';

function Tags () {

const tags = [
{name:'All', url:"https://assets10.lottiefiles.com/temp/lf20_xRdYra.json"},
{name:'Bread',  url:"../public/icons/gfree.svg"}, 
{name:'Pastries',  url:"../public/icons/cakecherry.svg"},
{name:'Gluten Free',  url:"../public/icons/sandwichbread.svg"}
]


  return (
    <div className='tag-div'>
      {tags.map(tag => {return <img src={tag.url} className='tag-a'></img>})}
    </div>
  )
}

export default Tags;