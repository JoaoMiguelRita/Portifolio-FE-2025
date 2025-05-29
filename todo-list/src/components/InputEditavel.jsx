import { useState } from "react"

export default function InputEditavel({p_texto, onEdit}) {
    
    const [editando, setEditando] = useState(false)

    if (editando) {
        return <input 
                    type="text"
                    defaultValue={p_texto}
                    autoFocus
                    onBlur={(e) => {
                        onEdit(e.target.value)
                        setEditando(false)
                    }}
                ></input>
    }
    
    return <p onDoubleClick={() => setEditando(true)} >{p_texto}</p>;
}