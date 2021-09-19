import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ apiFetch }) {
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
      <div className="Box">
        <div className="wrap">
          <div className="h4">
            <h4>Login</h4>
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
              onClick={() => apiFetch("/api/auth/login", data, "/")}
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
      <div className="foot">
        <p>
          <Link to="/signup">Sign up</Link>
          {/* <Link to='/forgotPassword'>Forgot password</Link> */}
          {/* <Link to='/resetPassword'>Reset password</Link> */}
        </p>
      </div>
    </div>
  );
}

export default Login;
