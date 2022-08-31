import './btnStyle.css';

const TodoButton = (props) => {

  const handleClick = () => {
    props.setOpenModal(true)
  }

  return (
    <footer className={!props.total >=1 ? 'footer' : 'btn-position-bottom'}>

      <button
      onClick={handleClick}
      className='btn btn-warning'
      > 
      Agregar tarea
      </button>

    </footer>
  )
}

export default TodoButton;