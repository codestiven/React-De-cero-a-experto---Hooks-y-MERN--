import React from 'react'

const Gifitem = ({title , url , id}) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default Gifitem
