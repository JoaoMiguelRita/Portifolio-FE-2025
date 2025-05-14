export default function TodoItem({todo, onDelete, onConclude}) {
    return (
        <div className="todo-item">
            <p>{todo.titulo}</p>
            <p>{todo.descricao}</p>
            <button onClick={() => onDelete(todo.id)}>Deletar</button>
            {todo.concluido ? <span>Concluído</span> : <button onClick={() => onConclude(todo.id)}>Concluir</button>}
        </div>
    )
}