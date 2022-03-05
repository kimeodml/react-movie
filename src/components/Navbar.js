import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { GenreList } from "../GenreList";
import "./Navbar.css";
import Logout from "pages/Login/Logout";
import { useSelector } from "react-redux";
import Loading from "./Loading";

function Navbar() {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const movieInput = useRef();
  const searchClick = (e) => {
    setSearch(e.target.value);
  };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      if (search.length < 2) {
        alert("두글자 이상 입력하세요.");
        movieInput.current.focus();
        return;
      }
      navigate(`/movie/search/${e.target.value}/1`);
      e.target.value = "";
    }
  };
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="nav">
      <div className="content_top">
        <span className="title">
          <Link to="/">Logo</Link>
        </span>
        <div className="user_info">
          {currentUser && <Logout />}
          {currentUser === null && (
            <>
              <span className="user_list">
                <Link to="/login">로그인</Link>
              </span>
              <span className="user_list">
                <Link to="/signup">회원가입</Link>
              </span>
            </>
          )}
          {currentUser === undefined && <Loading />}
        </div>
      </div>
      <div className="content_bottom">
        {GenreList.map((list, index) => {
          return (
            <span className="nav_list" key={index}>
              <Link to={`/movie/${list.path}/1`}>{list.title}</Link>
            </span>
          );
        })}
        <span className="nav_list">
          <Link to="/review">자유게시판</Link>
        </span>
        <span className="search">
          <input
            type="text"
            ref={movieInput}
            placeholder="검색"
            onChange={searchClick}
            onKeyPress={keyPress}
          />
          <Link to={`movie/search/${search}`}>
            <FcSearch className="search_logo" />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
