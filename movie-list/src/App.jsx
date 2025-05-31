import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { v4 as uuidv4} from 'uuid';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function App() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
  axios.get(`http://localhost:3000/movie`).then(
    response => {
      setMovieList(response.data)
    }
  )
  }, [movieList]);

  const handleAddMovie = (newMovie) => {
    newMovie.id = uuidv4()
    axios.post("http://localhost:3000/movie", newMovie)
  }

  const handleDeleteMovie = (id) => {
    const confirmDelete = window.confirm("Deseja deletar o filme da lista?")
    
    if (confirmDelete) {
      axios.delete(`http://localhost:3000/movie/${id}`)
    }
  }

  const handleConcluirMovie = (id) => {
    axios.patch(`http://localhost:3000/movie/${id}`, {concluido: true})
  }

  const handleFavoritarMovie = (id) => {
    if (movieList.find(movie => movie.id === id).favorito) {
      axios.patch(`http://localhost:3000/movie/${id}`, {favorito: false})
    } else {
      axios.patch(`http://localhost:3000/movie/${id}`, {favorito: true})
    } 
  }

  const handleEditarMovie = (id, newMovie) => {
    axios.patch(`http://localhost:3000/movie/${id}`, newMovie)
  }



  return (
    <>
      <div className='app-container'>
        <h1>Lista de Filmes Geral</h1>
        <MovieForm onAddMovie={handleAddMovie}></MovieForm>
        <MovieList
          movieList={movieList}
          onDelete={handleDeleteMovie}
          onConclude={handleConcluirMovie}
          onFavorite={handleFavoritarMovie}
          onEdit={handleEditarMovie}
        ></MovieList>
      </div>

      <div className='app-lists'>
        <div>
          <h2>Filmes Assistidos</h2>
          <MovieList
            movieList={movieList.filter((movie) => movie.concluido)}
            onDelete={handleDeleteMovie}
            onConclude={handleConcluirMovie}
            onFavorite={handleFavoritarMovie}
            onEdit={handleEditarMovie}
          />
        </div>  
        <div>
          <h2>Filmes Favoritos</h2>
          <MovieList
            movieList={movieList.filter((movie) => movie.favorito)}
            onDelete={handleDeleteMovie}
            onConclude={handleConcluirMovie}
            onFavorite={handleFavoritarMovie}
            onEdit={handleEditarMovie}
          />
        </div>
        <div>
          <h2>Filmes Pendentes</h2>
          <MovieList
            movieList={movieList.filter((movie) =>!movie.concluido)}
            onDelete={handleDeleteMovie}
            onConclude={handleConcluirMovie}
            onFavorite={handleFavoritarMovie}
            onEdit={handleEditarMovie}
          />
        </div>
      </div>

    </>
  )
}

export default App
