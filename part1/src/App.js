import React, { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <Display left={left} right={right} />
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

const Display = ({ left, right }) => <div>{left}:{right}</div>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


export default App