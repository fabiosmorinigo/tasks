import React from 'react'
import { TodoContext } from "../todoContext/TodoContext"
import './searchStyle.css'

const TodoSeach = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  function handleChangeInput(e) {
      setSearchValue(e.target.value);
  }
  return (
    <div className='container-fluid'>
      <input
        className='container-fluid input'
        type="text"
        placeholder="Buscar tarea"
        value={searchValue}
        onChange={handleChangeInput}
      />
    </div>
  )
}

export default TodoSeach