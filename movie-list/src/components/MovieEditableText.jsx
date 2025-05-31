import { useState } from "react"

export default function MovieEditableText({text, onEdit}){
    const [editing, setEditing] = useState(false)

    const handleDoubleClick = () => {
        setEditing(true)
    }

    const handleEdit = (newValue) => {
        onEdit(newValue)
        setEditing(false)   
    }

    if (editing) {
        return <input
            type="text"
            autoFocus
            defaultValue={text}
            onBlur={e => { 
                handleEdit(e.target.value)
            }}
            className="movie-text-editable"
        />
    }

    return <p
        onDoubleClick={handleDoubleClick}
        className="movie-text-editable"
        >{text}
    </p>
}