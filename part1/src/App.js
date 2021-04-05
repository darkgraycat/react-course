import React, { useState } from 'react'

const Display = ({ value }) => <div>{value}</div>
const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>

const App = () => {
  const [value, setValue] = useState(10)
  const setToValue = value => setValue(value)
  return (
    <>
      <Display value={value} />
      <Button handler={() => setToValue(1000)} text="thousand" />
      <Button handler={() => setToValue(0)} text="reset" />
      <Button handler={() => setToValue(value + 1)} text="increment" />
    </>
  )
}

export default App