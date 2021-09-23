import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

function ForgotPassword() {
  const {apiFetch} = useContext(AuthContext)
  const [email, setEmail] = useState("");

  const data = {
    email,
  };

  return (
    <div className="Auth">
      <div className="Box">
        <div className="wrap">
          <div className="h4">
            <h4>Forgot Password</h4>
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
          </form>
          <div className="Btn">
            <button
              onClick={() => apiFetch("/users/forgot-Password", data, "/")}
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
          {/* <Link to='/resetPassword'>Reset password</Link> */}
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
