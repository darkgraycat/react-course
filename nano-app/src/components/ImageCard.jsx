import React from 'react'

const ImageCard = ({ imageSrc, description }) => {

  return (
    <div className="image-card">
      <img src={imageSrc} alt="" />
      <div>{description}</div>
    </div>
  )
}

export default ImageCard