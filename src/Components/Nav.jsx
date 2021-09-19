// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

function Nav({logout}) {
  return (
    <div className="Nav">
      <div className="left">
        <Link to="/">
          <img className="logo" src="/logo.png" alt="CCP" />
        </Link>
          <h3>Welcome</h3>
      </div>
      <div className="right">
        <Link to="/addUser">
          <img className="add" src="/add.png" alt="add" />
        </Link>
        <div>
          
            <img onClick={logout()} className="logout" src="/logout.png" alt="logout" />
         

          <div className="dropdown">{/* <p>Logout</p> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
