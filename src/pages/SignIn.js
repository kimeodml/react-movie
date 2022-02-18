import { useState } from "react";

function SignIn() {
  const [text, setText] = useState({
    id: "",
    password: "",
    password2: "",
    name: "",
    gender: "default",
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
    <div className="sign">
      <form className="sign-form">
        <h1 className="sign-title">로그인</h1>
        <div className="sign-group">
          <label className="sign-label">아이디</label>
          <input className="sign-input" type="text" name="id" value={text.id} />
        </div>
        <div className="sign-group">
          <label className="sign-label">비밀번호</label>
          <input
            className="sign-input"
            type="password"
            name="password"
            value={text.password}
            onChange={handleChange}
          />
        </div>
        <div className="sign-group">
          <label className="sign-label">비밀번호 재확인</label>
          <input
            className="sign-input"
            type="password2"
            name="password2"
            value={text.password2}
            onChange={handleChange}
          />
        </div>
        <div className="sign-group">
          <label className="sign-label">이름</label>
          <input
            className="sign-input"
            type="name"
            name="name"
            value={text.name}
            onChange={handleChange}
          />
        </div>
        <div className="sign-group">
          <label className="sign-label">성별</label>
          <br />
          <select
            className="sign-input"
            name="gender"
            value={text.gender}
            onChange={handleChange}
          >
            <option value="default"> 성별</option>
            <option value="1">남성</option>
            <option value="2">여성</option>
            <option value="3">선택안함</option>
          </select>
        </div>
        <button className="sign-btn" type="submit" onClick={handleSubmit}>
          가입하기
        </button>
      </form>
    </div>
  );
}

export default SignIn;
