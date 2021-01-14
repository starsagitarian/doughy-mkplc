import React from 'react';

function Tags () {

const tags = ['All', 'Bread', 'Pastries', 'Gluten-Free']



  return (
    <div className='tag-div'>
      {tags.map(tag => {return <a className='tag-a'><p>{tag}</p></a>})}
    </div>
  )
}

export default Tags;