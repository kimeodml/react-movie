import { dbService } from "Fbase";
import { addDoc, collection } from "firebase/firestore";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ReviewWrite.css";

function ReviewWrite() {
  const { currentUser } = useSelector((state) => state.user);
  let navigate = useNavigate();
  const [text, setText] = useState({
    title: "",
    content: "",
  });
  const titleInput = useRef();
  const contentInput = useRef();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.title.length < 1) {
      titleInput.current.focus();
      return;
    }
    if (text.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    if (window.confirm("정말 글을 올리시겠습니까?") === false) {
      return;
    } else {
      try {
        const data = await addDoc(collection(dbService, "texts"), {
          text,
          createdAt: Date.now(),
          createdId: currentUser.uid,
        });
        navigate("/review");
      } catch (error) {
        console.log("Error adding document:", error);
      }
    }
    setText({
      title: "",
      content: "",
    });
  };
  return (
    <div>
      <div className="review">
        <h1>자유게시판</h1>
        <form className="review_form">
          <div>
            <input
              ref={titleInput}
              type="text"
              name="title"
              placeholder="제목을 입력하세요"
              value={text.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              ref={contentInput}
              type="text"
              name="content"
              placeholder="내용을 입력하세요"
              value={text.content}
              onChange={handleChange}
            />
          </div>
          <button className="review_btn" type="submit" onClick={handleSubmit}>
            글쓰기
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewWrite;
