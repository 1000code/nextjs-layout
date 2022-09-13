import React from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin } from "../../store/sevices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  toast.success("test toast");
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            handleLogin({
              name: "kob",
              accessToken: "kob",
              refreshToken: "kob",
              userId: "kob",
            })
          );
        }}
      >
        ooo
      </button>
      {JSON.stringify(auth)}
    </div>
  );
};

export default Login;
