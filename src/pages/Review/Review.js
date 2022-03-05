import { dbService } from "Fbase";
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReviewList from "./ReviewList";
import { useNavigate } from "react-router-dom";
import "./Review.css";
import Loading from "components/Loading";

function Review() {
  const { currentUser } = useSelector((state) => state.user);
  let navigate = useNavigate();
  const [texts, setTexts] = useState([]);
  const [loading, setLoading] = useState(true);
  const onWriteClick = () => {
    if (currentUser === null) {
      alert("로그인을 해야 글을 쓸 수 있습니다.");
    } else {
      navigate("/review/write");
    }
  };
  useEffect(() => {
    const q = query(
      collection(dbService, "texts"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const textArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTexts(textArr);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="review_list">
          <h1>게시판 리스트</h1>
          <div className="review_write">
            <button onClick={onWriteClick}>글쓰기</button>
          </div>
          <h3>{texts.length}개의 게시글이 존재합니다.</h3>
          {texts.map((text) => (
            <ReviewList
              key={text.id}
              textObj={text}
              time={text.createdAt}
              isOwner={text.createdId === currentUser.uid}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Review;
