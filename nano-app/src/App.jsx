import React from 'react'
import ImageCard from './components/ImageCard'

import image_1 from './images/image_1.png'
// import image_2 from './images/image_2.png'
// import image_3 from './images/image_3.png'
// import image_4 from './images/image_4.png'
// import image_5 from './images/image_5.png'


const App = () => {

  return (
    <>
      <h1>Image cards</h1>
      <ImageCard imageSrc={image_1} description="Some text 1" />
    </>
  )

}


export default App