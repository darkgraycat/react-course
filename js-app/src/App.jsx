import React from 'react'
import ImageCard from './components/ImageCard'

import image_1 from './images/image_1.png'
import image_2 from './images/image_2.png'
import image_3 from './images/image_3.png'


const App = () => {
  return (
    <>
      <h1>Header</h1>
      <ImageCard source={image_1} description="Some text 1" />
      <ImageCard source={image_2} description="Some text 2" />
      <ImageCard source={image_3} description="Some text 3" />
    </>
  )
}

export default App;
