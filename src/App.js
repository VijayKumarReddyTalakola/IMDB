import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/movieList/MovieList";
import Movie from "./pages/movieDetails/Movie";
import SearchResults from "./pages/search/Search";
import './pages/search/Search.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="search/:query" element={<SearchResults />}></Route>
          <Route path="/*" element={<h1 className="not_found">Page Not Found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
