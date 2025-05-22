import TodoItem from "./TodoItem";

export default function TodoList({todoList, onDelete, onConclude}) {
    return (
        <div className="todo-list">
            {todoList.map(todo => <TodoItem
                key={todo.id}
                todo={todo} 
                onDelete={onDelete}
                onConclude={onConclude}
            />)}
        </div>
    )
}