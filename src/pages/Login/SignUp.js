import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignUpInitiate } from "redux/Actions";

function SignUp() {
  let navigate = useNavigate();
  const [text, setText] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
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
    dispatch(SignUpInitiate(text.email, text.password));
  };
  useEffect(() => {
    if (currentUser) {
      alert("회원가입을 완료했습니다. 로그인 페이지로 이동합니다!");
      navigate("/login");
    }
  }, [currentUser]);
  return (
    <div className="contents">
      <form className="form">
        <h1 className="title">회원가입</h1>
        <div className="group">
          <label className="label">이메일</label>
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
        <p className="error">{error}</p>
        <button className="btn" type="submit" onClick={handleSubmit}>
          가입하기
        </button>
      </form>
    </div>
  );
}

export default SignUp;
