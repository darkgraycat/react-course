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
      <History allClicks={allClicks} />
      <Hello />
      <EventTest />
    </div>
  )
}

const History = ({ allClicks }) => {
  return (
    <div>
      {
        allClicks.length === 0 ?
          `the app is used by pressing the buttons` :
          `button press history: ${allClicks.join(' ')}`
      }
    </div>
  )
}

const Hello = () => {
  const hello = (who) => () => console.log('hello', who)
  return (
    <div>
      <Button handleClick={hello('world')} text='to world' />
      <Button handleClick={hello('react')} text='to react' />
      <Button handleClick={hello('people')} text='to people' />
    </div>
  )
}

const EventTest = () => {
  const [value, setValue] = useState(0)
  const setToValue = (value) => () => setValue(value)
  return (
    <div>
      {value}
      <br />
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(100)}>hundred</button>
      <button onClick={setToValue(value + 1)}>+1</button>
    </div >
  )
}

const Display = ({ left, right }) => <div>{left}:{right}</div>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

export default App