import React from 'react'
import './listStyle.css';

const TodoList = (props) => {
  return (
    <article className={props.total >=1 ? 'todoList--absolute' : 'todoList todoListAdd'}>
      {props.children}
  </article>
  )
}

export default TodoList