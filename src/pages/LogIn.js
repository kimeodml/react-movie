import { useState } from "react";

function LogIn() {
  const [text, setText] = useState({
    id: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
            name="id"
            value={text.id}
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
