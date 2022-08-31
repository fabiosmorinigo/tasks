import {AppUI} from './AppUI';
import {TodoProvider} from '../todoContext/TodoContext'


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    )
}

export default App
