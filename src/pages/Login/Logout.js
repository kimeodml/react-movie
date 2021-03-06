import { useDispatch, useSelector } from "react-redux";
import { LogoutInitiate } from "redux/Actions";

function Logout() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = async () => {
    if (currentUser) {
      dispatch(LogoutInitiate());
    }
  };
  return (
    <div>
      <button onClick={handleAuth}>๋ก๊ทธ์์</button>
    </div>
  );
}

export default Logout;
