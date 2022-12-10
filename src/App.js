import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/Todolist';


const App = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
      filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
      <>
      <h1>Today's Todo List</h1>
      <Form 
            todos={todos}
            setTodos={setTodos} 
            input={input}
            setInput={setInput}
            setStatus={setStatus}
      />
      <TodoList 
            setTodos={setTodos} 
            todos={todos}
            filteredTodos={filteredTodos}
      />
      </>
  )
}

export default App;
