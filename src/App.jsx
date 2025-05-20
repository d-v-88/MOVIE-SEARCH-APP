import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard'
import Footer from './components/Footer.jsx'



const API_URL = import.meta.env.VITE_OMDB_API_URL;


const App = () => {

  const addToFavorites = (movie) => {
    if (!favorites.find(f => f.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [movies, setMovies] = useState([])

  const [searchTerm, setSearchTerm] = useState("");


  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovie("Batman")
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <div className="app">
        <h1>CineBuddy</h1>

        <div className="search">
          <input type="text" placeholder='Search movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />


          <img src={SearchIcon} alt="search" onClick={() => searchMovie(searchTerm)} />
        </div>


        {movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onSave={addToFavorites}
                isSaved={favorites.some(f => f.imdbID === movie.imdbID)}
              />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}


      </div>
      <Footer />
    </>

  )
}

export default App
