import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Animation from "./pages/Animation";
import Document from "./pages/Document";
import Musical from "./pages/Musical";
import Review from "./pages/Review";
import Rommance from "./pages/Rommance";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rommance" element={<Rommance />} />
          <Route path="/document" element={<Document />} />
          <Route path="/musical" element={<Musical />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
