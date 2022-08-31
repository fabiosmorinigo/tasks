import './todoItemStyle.css';
import completedicon from '../icon/completed.svg';
import uncompletedicon from '../icon/uncompleted.svg';
import deleteicon from '../icon/delete.svg';

function TodoItem(props) {

  return (
    <li>
      <span
        onClick={props.onCompleted}
      >{props.completed ? <img src={completedicon} alt='icon completed' className='icon completed'/> : <img src={uncompletedicon} alt='icon uncompleted' className='icon uncompleted'/> }</span>
      <p className={props.completed ? 'active' : 'inactive'}>{props.text}</p>
      <span
        onClick={props.deleteTodo}
      ><img src={deleteicon} alt="Icon delete" className='icon delete'/></span>
    </li>
  );
}

export default TodoItem