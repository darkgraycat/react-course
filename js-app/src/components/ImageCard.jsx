import React from 'react'
import './ImageCard.css'

const ImageCard = ({ source, header, children }) => {
  return (
    <div className="ImageCard">
      <img src={source} alt="" />
      <h4>{header}</h4>
      <div>{children}</div>
    </div>
  )
}

export default ImageCard