import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

function ResetPassword() {
  const {apiFetch} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);

  const data = {
    email,
    password,
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="Auth">
      <div className="logo">
        <img src="/logo.png" alt="Loosemedia logo" />
      </div>
      <div className="Box">
        <div className="wrap">
          <div className="h4">
            <h4>Reset Password</h4>
          </div>
          <form>
            <div className="Input">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="Input password">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type={passwordShown ? "text" : "password"}
              />
              <i
                className="fa fa-eye"
                aria-hidden="true"
                onClick={togglePasswordVisiblity}
              ></i>
            </div>
          </form>

          <div className="Btn">
            <button
              onClick={() => apiFetch("/users/reset-Password", data, "/")}
              type="submit"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
      <div className="foot">
        <p>
          <Link to="/signup">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/forgotPassword">Forgot password</Link>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
