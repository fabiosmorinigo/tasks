import React, { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
const TodoContext = React.createContext();
import soundSelect from '../assets/sound/completed.wav'
import soundUnselect from '../assets/sound/noCompleted.wav'
import soundRemove from '../assets/sound/remove.wav'


function TodoProvider(props) {

  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  const {
    todos,
    saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const isCompleted = todos.filter(item => item.completed).length;
  const total = todos.filter(item => item.text).length;
  const [openModal, setOpenModal] = useState(false);


  //si el usuario no escribe nada, retornamos los todos, sin embargo, si escribe algo filtramos los todos
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
          return todoText.includes(searchText)
    })
  }

  //Function complete todo
  const completeTodos = (text) => {

    const soundStart = () => {
      newTodos[todoIndex].completed = false
      const select = new Audio(soundSelect)
      select.play();
    }

    const soundEnd = () => {
      newTodos[todoIndex].completed = true
      const unselect = new Audio(soundUnselect)
      unselect.play();
    }


    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed ? soundStart() : soundEnd();
    saveTodos(newTodos)


  }

  //function delete todo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
    const remove = new Audio(soundRemove)
    remove.play()
  }

  const addTask = (text = '') => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      isCompleted,
      total,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodos,
      deleteTodo,
      addTask,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  );
};


export { TodoContext, TodoProvider }