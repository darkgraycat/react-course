import React from 'react'
import Navbar from './components/Navbar'
import ImageCard from './components/ImageCard'

import image_1 from './images/image_1.png'
import image_2 from './images/image_2.png'
import image_3 from './images/image_3.png'
import image_4 from './images/image_4.png'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar title="My react app">
        <a href="/">Item 1</a>
        <a href="/">Item 2</a>
        <a href="/">Item 3</a>
      </Navbar>

      <h1>Articles</h1>

      <p>
        <em>
          There is not dynamic page yet. Just learning how to draw with react.
        </em>
      </p>

      <ImageCard source={image_1} header="Header 1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi facilis quod aut nulla quos rem consequatur cupiditate quam porro maxime ut eius non asperiores, mollitia accusamus veritatis aliquid hic debitis!
      </ImageCard>

      <ImageCard source={image_2} header="Header 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugiat vitae voluptate sed. A recusandae accusantium fugiat ducimus quod, aliquam repellat adipisci itaque eveniet consequatur. Voluptatem neque incidunt velit nobis.
      </ImageCard>

      <ImageCard source={image_3} header="Header 3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cupiditate iste iure aperiam provident officia vero in aliquam asperiores nobis distinctio perferendis eos, impedit aspernatur maiores doloremque excepturi ipsa neque.
      </ImageCard>

      <ImageCard source={image_4} header="Header 4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis fugit iste amet saepe quia exercitationem quibusdam quis qui deserunt harum vitae aliquam sapiente tempore perferendis, architecto ipsum. Iste, quaerat distinctio!
      </ImageCard>

      <ImageCard source={image_1} header="Header 1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi facilis quod aut nulla quos rem consequatur cupiditate quam porro maxime ut eius non asperiores, mollitia accusamus veritatis aliquid hic debitis!
      </ImageCard>

      <ImageCard source={image_2} header="Header 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugiat vitae voluptate sed. A recusandae accusantium fugiat ducimus quod, aliquam repellat adipisci itaque eveniet consequatur. Voluptatem neque incidunt velit nobis.
      </ImageCard>

      <ImageCard source={image_3} header="Header 3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cupiditate iste iure aperiam provident officia vero in aliquam asperiores nobis distinctio perferendis eos, impedit aspernatur maiores doloremque excepturi ipsa neque.
      </ImageCard>

      <ImageCard source={image_4} header="Header 4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis fugit iste amet saepe quia exercitationem quibusdam quis qui deserunt harum vitae aliquam sapiente tempore perferendis, architecto ipsum. Iste, quaerat distinctio!
      </ImageCard>
    </div>
  )
}

export default App;
