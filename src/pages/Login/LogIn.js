import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginInitiate } from "redux/Actions";

function LogIn() {
  let navigate = useNavigate();
  const [text, setText] = useState({
    email: "",
    password: "",
  });
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LoginInitiate(text.email, text.password));
  };
  useEffect(() => {
    if (currentUser) {
      alert("로그인을 완료했습니다!");
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className="contents">
      <form className="form">
        <h1 className="title">로그인</h1>
        <div className="group">
          <label className="label">아이디</label>
          <input
            className="input"
            type="text"
            name="email"
            value={text.email}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label className="label">비밀번호</label>
          <input
            className="input"
            type="password"
            name="password"
            value={text.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit" onClick={handleSubmit}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LogIn;
