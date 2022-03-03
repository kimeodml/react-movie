import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import LogIn from "./pages/Login/LogIn";
import SignUp from "./pages/Login/SignUp";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Movie from "./pages/Movie/Movie";
import MovieDetail from "./pages/Movie/MovieDetail";
import Search from "./pages/Search";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authService } from "Fbase";
import { Button, SetUser } from "./redux/Actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(authService, (authUser) => {
      if (authUser) {
        dispatch(SetUser(authUser));
      } else {
        dispatch(SetUser(null));
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:genre/:page" element={<Movie />} />
          <Route path="/movie/search/:search/:page" element={<Search />} />
          <Route path="/movie/detail/:id" element={<MovieDetail />} />
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
