import { useState } from "react";

export default function MovieForm({onAddMovie}) {
    const [newMovie, setNewMovie] = useState({
        "titulo": "",
        "ano": "",
        "genero": ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddMovie(newMovie)
        setNewMovie({
            "titulo": "",
            "ano": "",
            "genero": ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newMovie.titulo}
                onChange={e => setNewMovie({...newMovie, titulo: e.target.value})}
                placeholder="Título do filme"
            />
            <input
                type="text"
                value={newMovie.ano}
                onChange={e => setNewMovie({...newMovie, ano: e.target.value})}
                placeholder="Ano de lançamento"
            />
            <input
                type="text"
                value={newMovie.genero}
                onChange={e => setNewMovie({...newMovie, genero: e.target.value})}
                placeholder="Gênero do filme"
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}