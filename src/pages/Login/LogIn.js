import { authService } from "Fbase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  let navigate = useNavigate();
  const [newUser, setNewUser] = useState(true);
  const [text, setText] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newUser) {
        data = await signInWithEmailAndPassword(
          authService,
          text.email,
          text.password
        );
        alert(`로그인을 완료했습니다.`);
        navigate(`/`);
      }
    } catch (error) {
      setError(error.message);
    }
  };

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
        <p className="error">{error}</p>
        <button className="btn" type="submit" onClick={handleSubmit}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LogIn;
