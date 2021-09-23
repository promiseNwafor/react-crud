import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import "./style.css";

function Nav() {
  const { user, logout} = useContext(AuthContext)

  useEffect(() => {
    
  }, [user]);

  return (
    <div className="Nav">
      <div className="left">
        <Link to="/">
        <h1>Home</h1>
        </Link>
        <h2>{user && `Welcome ${user.email}`}</h2>
      </div>
      <div className="right">
        <Link to="/addUser">
          <img className="add" src="/add.png" alt="add" />
        </Link>
        <div>
          <img
            onClick={() => logout()}
            className="logout"
            src="/logout.png"
            alt="logout"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
