import React from 'react'
import { PropTypes } from 'prop-types'
export const GridGifItem = ({url,title}) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GridGifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}