import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import "./Navbar.css";
import { MovieList } from "../List.js/MovieList";

function Navbar() {
  return (
    <div className="nav">
      <div className="content_top">
        <span className="title">
          <Link to="/">Logo</Link>
        </span>
        <div className="user_info">
          <span className="user_list">
            <Link to="/login">로그인</Link>
          </span>
          <span className="user_list">
            <Link to="/signup">회원가입</Link>
          </span>
        </div>
      </div>
      <div className="content_bottom">
        {MovieList.map((list, index) => {
          return (
            <span className="nav_list" key={index}>
              <Link to={`movie/${list.path}`}>{list.title}</Link>
            </span>
          );
        })}
        <span className="nav_list">
          <Link to="/review">자유게시판</Link>
        </span>
        <span className="search">
          <FcSearch className="search_logo" />
          <input type="text" placeholder="검색" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
