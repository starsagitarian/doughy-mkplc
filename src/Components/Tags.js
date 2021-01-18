import React from 'react';
import BreadLogo from '../public/icons/bread.png'

function Tags () {

const tags = ['All','Bread','Pastries','Gluten Free']


  return (
    <div className='tag-div'>
      {/* {tags.map(tag => {return <p className='tag-a'>{[tag]}</p>})} */}
      {tags.map(tag => {return <div className="tag-wrapper"><p className='tag-a'>{[tag]}</p></div>})}
    </div>
  )
}

export default Tags;

