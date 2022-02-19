import { useState } from "react";
import { SValidation } from "./Validation";

function SignIn() {
  const [text, setText] = useState({
    id: "",
    password: "",
    password2: "",
    name: "",
    gender: "default",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(SValidation(text));
  };
  return (
    <div className="contents">
      <form className="form">
        <h1 className="title">회원가입</h1>
        <div className="group">
          <label className="label">아이디</label>
          <input
            className="input"
            type="text"
            name="id"
            value={text.id}
            onChange={handleChange}
          />
          {errors.id && <p className="error">{errors.id}</p>}
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
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="group">
          <label className="label">비밀번호 재확인</label>
          <input
            className="input"
            type="password"
            name="password2"
            value={text.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p className="error">{errors.password2}</p>}
        </div>
        <div className="group">
          <label className="label">이름</label>
          <input
            className="input"
            type="name"
            name="name"
            value={text.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="group">
          <label className="label">성별</label>
          <br />
          <select
            className="input"
            name="gender"
            value={text.gender}
            onChange={handleChange}
          >
            <option value="default"> 성별</option>
            <option value="1">남성</option>
            <option value="2">여성</option>
            <option value="3">선택안함</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
        <button className="btn" type="submit" onClick={handleSubmit}>
          가입하기
        </button>
      </form>
    </div>
  );
}

export default SignIn;
