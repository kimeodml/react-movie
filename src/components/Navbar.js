import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div className="content_top">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <ul className="userInfo">
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
        <ul>
          <Link to="/signin">회원가입</Link>
        </ul>
      </div>
      <div className="content_bottom">
        <ul className="nav-menu">
          <li>
            <Link to="/rommance">로맨스</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/document">다큐</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/musical">뮤지컬</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/animation">애니메이션</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/review">자유 게시판</Link>
          </li>
        </ul>
        <ul>
          <input type="text" placeholder="검색" />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
