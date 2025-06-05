import { useEffect, useState } from 'react'
import TodoForms from '../components/TodoForms';
import TodoList from '../components/TodoList'
import { v4 as uuidv4} from 'uuid';
import axios from 'axios';

export default function TodoPage() {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/tarefas').then(
        response => {
            setTodoList(response.data)
        }
        )
    }, [todoList]);

    const handleAddTodo = (newTodo) => {
        newTodo.id = uuidv4()
        axios.post('http://localhost:3000/tarefas', newTodo)
    }

    const handleDeleteTodo = (id) => {
        axios.delete(`http://localhost:3000/tarefas/${id}`)
    }

    const handleConcluirTodo = (id) => {
        axios.patch(`http://localhost:3000/tarefas/${id}`, {concluido: true})
    }

    const handleEditarTodo = (id, editando) => {
        axios.patch(`http://localhost:3000/tarefas/${id}`, editando)
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
            onEdit={handleEditarTodo}
            />
        </div>
        </>
    )
}