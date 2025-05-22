import { useEffect, useState } from 'react'
import TodoForms from './components/TodoForms';
import TodoList from './components/TodoList'
import { v4 as uuidv4} from 'uuid';

export default function App() {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddTodo = (newTodo) => {
    newTodo.id = uuidv4()
    setTodoList([...todoList, newTodo])
  }

  const handleDeleteTodo = (id) => {
    console.log("Deletando " + id)
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const handleConcluirTodo = (id) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, concluido: !todo.concluido }
      }
      return todo
    }))
  }

  return (
    <>
      <div className="app-container">
        <h1>📝 To-Do List</h1>
        <TodoForms onAddTodo={handleAddTodo}></TodoForms>
        <TodoList
          todoList={todoList}
          onDelete={handleDeleteTodo}
          onConclude={handleConcluirTodo}
        />
    </div>
    </>
  )
}
