import { dbService } from "Fbase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./ReviewList.css";

function ReviewList({ textObj, isOwner, time, email, id }) {
  const { currentUser } = useSelector((state) => state.user);
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState({
    newtitle: textObj.title,
    newcontent: textObj.content,
  });
  const data = doc(dbService, "texts", `${id}`);
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
    if (textObj.title.length < 1) {
      editTitleInput.current.focus();
      alert("제목을 적어주세요");
      return;
    }
    if (textObj.content.length < 5) {
      editContentInput.current.focus();
      alert("내용은 최소 다섯자 입니다.");
      return;
    }
    alert("글을 수정하였습니다.");
    await updateDoc(data, {
      text: {
        title: newText.newtitle,
        content: newText.newcontent,
      },
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
        작성자: {email} | {new Date(time).toLocaleString()}
      </div>
      <div className="reveiw_content">
        {editing ? (
          <>
            <input
              type="text"
              ref={editTitleInput}
              name="newtitle"
              value={newText.newtitle}
              onChange={onChange}
            />
            <textarea
              ref={editContentInput}
              type="text"
              name="newcontent"
              value={newText.newcontent}
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
            <p className="review_title">{textObj.title}</p>
            <p className="review_text">{textObj.content}</p>
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
