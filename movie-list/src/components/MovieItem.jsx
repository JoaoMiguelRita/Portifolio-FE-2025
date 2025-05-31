import MovieEditableText from "./MovieEditableText";

export default function MovieItem({movie, onDelete, onConclude, onFavorite, onEdit}){
    
    const handleEditMovie = (key, newValue) => {
        onEdit(movie.id, {[key]: newValue})
    }
    
    return(
        <div className="movie-item">
            <MovieEditableText 
                id={"titulo"}
                text={movie.titulo}
                onEdit={(value) => handleEditMovie("titulo", value)}
            />

            <MovieEditableText 
                id={"ano"}
                text={movie.ano}
                onEdit={(value) => handleEditMovie("ano", value)}
            />

            <MovieEditableText 
                id={"genero"}
                text={movie.genero}
                onEdit={(value) => handleEditMovie("ano", value)}
            />
            
            {movie.favorito ? <button onClick={() => onFavorite(movie.id)}>Desfavoritar</button> : <button onClick={() => onFavorite(movie.id)}>Favoritar</button>}
            {movie.concluido ? <span>Assistido</span> : <button onClick={() => onConclude(movie.id)}>Concluir</button>}
            <button onClick={() => onDelete(movie.id)}>Deletar</button>
        </div>
    )
}
