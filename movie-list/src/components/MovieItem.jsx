export default function MovieItem({movie, onDelete, onConclude, onFavorite}){
    return(
        <div className="movie-item">
            <p>{movie.titulo}</p>
            <p>{movie.ano}</p>
            <p>{movie.genero}</p>
            
            {movie.favorito ? <button onClick={() => onFavorite(movie.id)}>Desfavoritar</button> : <button onClick={() => onFavorite(movie.id)}>Favoritar</button>}
            {movie.concluido ? <span>Assistido</span> : <button onClick={() => onConclude(movie.id)}>Concluir</button>}
            <button onClick={() => onDelete(movie.id)}>Deletar</button>
        </div>
    )
}
