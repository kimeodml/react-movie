import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LogIn from "./pages/Login/LogIn";
import SignUp from "./pages/Login/SignUp";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Movie from "./pages/Movie/Movie";
import MovieDetail from "./pages/Movie/MovieDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:genre/:page" element={<Movie />} />
          <Route path="/movie/:genre/:page/:id" element={<MovieDetail />} />
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
