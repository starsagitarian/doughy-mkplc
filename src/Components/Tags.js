/* eslint-disable */
import React from 'react';

function Tags () {

const tags = ['Bread','Pastries','Gluten Free']

  return (
    <div className='tag-div'>
      {tags.map(tag => {return <div className="tag-wrapper"><p className='tag-a'>{[tag]}</p></div>})}
    </div>
  )
}

export default Tags;

