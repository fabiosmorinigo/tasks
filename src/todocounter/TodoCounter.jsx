import React from 'react'
import { TodoContext } from "../todoContext/TodoContext"
import './counterStyle.css';

const TodoCounter = () => {
  const {total, isCompleted} = React.useContext(TodoContext);
  return (
    <div className="container-fluid">
      <h2 className='fs-5 text-center pt-2 pb-2'>Haz completado {isCompleted} de {total} tareas</h2>
    </div>
  )
}

export  default TodoCounter;