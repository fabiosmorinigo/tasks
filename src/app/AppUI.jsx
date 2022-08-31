import React, { Fragment } from 'react'
import TodoCounter from '../todocounter/TodoCounter';
import TodoSearch from '../todosearch/TodoSeach';
import TodoList from '../todolist/TodoList';
import TodoItem from '../todoitem/TodoItem';
import TodoButton from '../todobutton/TodoButton';
import { TodoContext } from '../todoContext/TodoContext';
import {Modal} from '../modal/Modal';
import TodoForm from '../todoForm/TodoForm';
import ContentLoader from 'react-content-loader';
import cover from '../assets/img/cover500.png';
import calltoaction from '../assets/img/calltoaction.png';


import facebook from '../icon/facebook.svg';
import twitter from '../icon/twitter.svg';
import instagram from '../icon/instagram.svg';
import linkedin from '../icon/linkedin.svg';
import github from '../icon/github.svg';
import portfolio from '../icon/code.svg';



import './appUIStyle.css'

const AppUI = () => {

  const {error, loading, searchedTodos, completeTodos, deleteTodo, openModal, setOpenModal, total} = React.useContext(TodoContext);

  return (
    <Fragment>
      <header className='header'>
      <img src={cover} alt="" className='coverHeader img-fuid container-fluid'/>
      </header>
      {total >=1 ? <TodoCounter /> : ''}
      {total >=1 ? <TodoSearch />: ''}

      <TodoContext.Consumer>
        {() => {
          return (
            <TodoList 
              total={total}
            >
              {error && <p>Hubo un error, por favor vuelva a intentarlo.</p>}
              {loading && <ContentLoader
                viewBox="0 0 400 160"
                height={160}
                width={400}
                backgroundColor="transparent"
              >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
              </ContentLoader>}
              {(!loading && !total) && <img src={calltoaction} alt='call to action' className='cover container-fluid' />}

              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onCompleted={() => completeTodos(todo.text)}
                  deleteTodo={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          )
        }}
      </TodoContext.Consumer>

      {openModal && (
        <Modal>
          <Fragment>
            <TodoForm />
          </Fragment>

        </Modal>
      )}

      <TodoButton
        setOpenModal={setOpenModal}
        total={total}
      />

      <footer className={total >=1 ? 'social--left' : 'social'}>
        <div className={total >=1 ? 'icon__social--left' : 'icon__social'}>
          <a href="https://www.facebook.com/fabiosmorinigo" target='_blank'><img src={facebook} alt="facebook icon" className='facebook icon'/></a>
          <a href="https://twitter.com/fabiosmorinigo" target='_blank'><img src={twitter} alt="twitter icon" className='twitter icon'/></a>
          <a href="https://www.instagram.com/fabiosmorinigo/" target='_blank'><img src={instagram} alt="instagram icon" className='instagram icon'/></a>
          <a href="https://www.linkedin.com/in/fabiosmorinigo/" target='_blank'><img src={linkedin} alt="linkedin icon" className='linkedin icon'/></a>
          <a href="https://github.com/fabiosmorinigo" target='_blank'><img src={github} alt="github icon" className='github icon'/></a>
          <a href="https://fabiosmorinigo.github.io/portfolio/" target='_blank'><img src={portfolio} alt="portfolio icon" className='portfolio icon'/></a>
        </div>
      </footer>
    </Fragment>
  )
}

export  { AppUI };