import React from 'react';
import "../App.css"
import {useState, useEffect} from "react";
import Header from './Header';
import Search from './Search';
import Movie from './Movie';


function App() {
  const MOVI_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    fetch(MOVI_API_URL)
    .then(response => response.json())
    .then(data => console.log(movies))
  })

  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
