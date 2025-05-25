import MovieItem from "./MovieItem";

export default function MovieList({movieList, onDelete, onConclude, onFavorite}){
    return(
        <div className="movie-list">
            {
                movieList.map(movie => <MovieItem
                    key={movie.id}
                    movie={movie}
                    onDelete={onDelete}
                    onConclude={onConclude}
                    onFavorite={onFavorite}
                />)
            }
        </div>
    )
}