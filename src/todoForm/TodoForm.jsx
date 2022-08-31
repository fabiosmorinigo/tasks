import React, {useState, useEffect} from 'react';
import { TodoContext } from '../todoContext/TodoContext';
import './formStyle.css';

const TodoForm = () => {

  const {addTask, setOpenModal} = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  function handleChange(e){
    setNewTodoValue(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    addTask(newTodoValue)
    setOpenModal(false)
  }

  useEffect(() => {
    document.addEventListener("keyup", function(e) {
      if (e.code === 'Enter') {
        e.preventDefault();
        addTask(newTodoValue)
        setOpenModal(false)
      }
  });
 
  }, [setOpenModal, newTodoValue])
  


  return (
    <form onSubmit={handleAddTask} className='form'>
      <label className='pb-2 fw-bolder fs-2'>Registrar tarea</label>
      <textarea className='textarea' cols="35" rows="10" placeholder='Ej. Hacer ejercicio a la tarde.' value={newTodoValue} onChange={handleChange}/>
      <div>
        <button className='btn btn-danger fw-bolder' onClick={() => setOpenModal(false)}>Cancelar</button>
        <button type='submit' className='btn btn-success ms-2 fw-bolder'>Agregar</button>
      </div>
    </form>
  )
}

export default TodoForm