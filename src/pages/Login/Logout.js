import { useDispatch, useSelector } from "react-redux";
import { LogoutInitiate } from "redux/Actions";

function Logout() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      console.log(currentUser);
      dispatch(LogoutInitiate());
    }
  };
  return (
    <div>
      <button onClick={handleAuth}>로그아웃</button>
    </div>
  );
}

export default Logout;
