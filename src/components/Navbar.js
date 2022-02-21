import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="content_top">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
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
        <div className="nav-menu">
          <Link to="/movie/genre/rommance">로맨스</Link>
          <Link to="/movie/genre/document">다큐</Link>
          <Link to="/movie/genre/musical">뮤지컬</Link>
          <Link to="/movie/genre/musical">뮤지컬</Link>
          <Link to="/movie/genre/animation">애니메이션</Link>
          <Link to="/review">자유 게시판</Link>
          <span className="search">
            <input type="text" placeholder="검색" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
