import { Link } from "react-router-dom";
import "./style.css";

function Nav({ logout }) {
  return (
    <div className="Nav">
      <div className="left">
        <Link to="/">
        <h1>Home</h1>
        </Link>
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
