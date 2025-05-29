import InputEditavel from "./InputEditavel"

export default function TodoItem({todo, onDelete, onConclude, onEdit}) {

    const handleEditarTodo = (chave, novoValor) => {
        onEdit(todo.id, {[chave]: novoValor})
    }

    return (
        <div className="todo-item">
            <InputEditavel 
                id="titulo"
                p_texto={todo.titulo}
                onEdit={(novoValor) => {
                    handleEditarTodo("titulo", novoValor)
                }}></InputEditavel>
            <InputEditavel 
                id="descricao" 
                p_texto={todo.descricao}
                onEdit={(novoValor) => {
                    handleEditarTodo("descricao", novoValor)
                }}> </InputEditavel>
            <button onClick={() => onDelete(todo.id)}>Deletar</button>
            {todo.concluido ? <span>Concluído</span> : <button onClick={() => onConclude(todo.id)}>Concluir</button>}
        </div>
    )
}