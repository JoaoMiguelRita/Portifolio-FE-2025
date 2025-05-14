import { useState } from "react"

export default function TodoForms({onAddTodo}) {
    const [newTodo, setNewTodo] = useState({
        "titulo": "",
        "descricao": ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddTodo(newTodo)
        setNewTodo({
            "titulo": "",
            "descricao": ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodo.titulo}
                onChange={e => setNewTodo({...newTodo, titulo: e.target.value})}
                placeholder="Título da Tarefa"
            />
            <input
                type="text"
                value={newTodo.descricao}
                onChange={e => setNewTodo({...newTodo, descricao: e.target.value})}
                placeholder="Descrição da tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}