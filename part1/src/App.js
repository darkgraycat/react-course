import React, { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })


  return (
    <div>
      <Display left={clicks.left} right={clicks.right} />
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
    </div>
  )
}

const Display = ({ left, right }) => <div>{left}:{right}</div>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


export default App