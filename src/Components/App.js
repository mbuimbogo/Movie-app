import React from 'react';
import {useState, useEffect} from "react";
import Header from './Header';
import Search from './Search';
import Movie from './Movie';
import './App.css';

function App() {
  const MOVI_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
