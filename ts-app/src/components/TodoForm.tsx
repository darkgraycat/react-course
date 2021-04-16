import React, { useState, useRef } from 'react'

interface ITodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)


  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key == 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // console.log(title);
      // setTitle('')
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Type new task"
      />
      <label htmlFor="title" className="active">
        Enter new task
      </label>
    </div>
  )
}