import { dbService } from "Fbase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./ReviewList.css";

function ReviewList({ textObj, isOwner, time }) {
  const { currentUser } = useSelector((state) => state.user);
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(
    textObj.text.title,
    textObj.text.content
  );
  const data = doc(dbService, "texts", `${textObj.id}`);
  const editTitleInput = useRef();
  const editContentInput = useRef();

  const onDeleteClick = async () => {
    const ok = window.confirm("정말 글을 삭제하시겠습니까?");
    if (ok) {
      await deleteDoc(data);
    }
  };
  const toggleEdit = () => {
    setEditing((prev) => !prev);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (textObj.text.title < 1) {
      editTitleInput.current.focus();
      return;
    }
    if (textObj.text.content < 5) {
      editContentInput.current.focus();
      return;
    }
    alert("글을 수정하였습니다.");
    await updateDoc(data, {
      text: newText,
    });
    setEditing(false);
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setNewText({
      ...newText,
      [name]: value,
    });
  };
  return (
    <div className="review_item">
      <div className="review_info">
        작성자: {currentUser.email} | {new Date(time).toLocaleString()}
      </div>
      <div className="reveiw_content">
        {editing ? (
          <>
            <input
              type="text"
              ref={editTitleInput}
              value={newText}
              onChange={onChange}
            />
            <textarea
              ref={editContentInput}
              type="text"
              value={newText.content}
              onChange={onChange}
            />
            <button type="submit" onClick={onSubmit}>
              수정완료
            </button>
            <button type="submit" onClick={toggleEdit}>
              수정취소
            </button>
          </>
        ) : (
          <>
            <p className="review_title">{textObj.text.title}</p>
            <p className="review_text">{textObj.text.content}</p>
            {isOwner && (
              <>
                <button type="submit" onClick={onDeleteClick}>
                  삭제하기
                </button>
                <button type="submit" onClick={toggleEdit}>
                  수정하기
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default React.memo(ReviewList);
