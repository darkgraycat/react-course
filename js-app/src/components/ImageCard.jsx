import React from 'react'

const ImageCard = ({ source, description }) => {
  return (
    <div className="image-card">
      <img src={source} alt="" />
      <div>{description}</div>
    </div>
  )
}

export default ImageCard