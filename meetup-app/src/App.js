import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="1" />
      <Todo title="2" />
      <Todo title="3" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
