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
    axios.delete(`http://localhost:3000/movie/${id}`)
  }

  const handleConcluirMovie = (id) => {
    axios.patch(`http://localhost:3000/movie/${id}`, {concluido: true})
  }

  return (
    <>
      <div className='app-container'>
        <h1>Lista de Filmes</h1>
        <MovieForm onAddMovie={handleAddMovie}></MovieForm>
        <MovieList
          movieList={movieList}
          onDelete={handleDeleteMovie}
          onConclude={handleConcluirMovie}
        ></MovieList>
      </div>
    </>
  )
}

export default App
