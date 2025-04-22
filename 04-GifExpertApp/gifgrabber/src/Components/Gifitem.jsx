import React from 'react'
import PropTypes from 'prop-types'

const Gifitem = ({title , url , id}) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

Gifitem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}


export default Gifitem
