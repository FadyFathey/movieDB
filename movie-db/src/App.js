import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
function App() {
  const [movies, setMovies] = useState([]);
  const [PageCount, setPageCount] = useState(0);
  // get all movies from api
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
  }, []);
  // search
  const search = async (word) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
    );

    if (word === "") {
      getAllMovies();
    } else {
      setMovies(res.data.results);
    }

    setPageCount(res.data.total_pages);
  };
  // get pages from api
  const getAllPages = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    );

    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };
  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  getAllPages={getAllPages}
                  PageCount={PageCount}
                />
              }
            />

            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
