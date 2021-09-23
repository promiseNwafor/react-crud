import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddUser from "./Components/AddUser";
import ForgotPassword from "./Components/ForgotPassword";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import ResetPassword from "./Components/ResetPassword";
import Signup from "./Components/Signup";
import UpdateUser from "./Components/UpdateUser";
import User from "./Components/User";
import Users from "./Components/Users";
import { Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import AuthContextProvider from "./hooks/AuthContext";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const foundUser = loggedInUser && JSON.parse(loggedInUser);
    setUser(foundUser);
    console.log(user);
  }, []);

  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          {user && <Nav />}
          <Switch>
            <Route exact path="/">
              {user ? <Users /> : <Login />}
            </Route>
            <Route exact path="/user/:id">
              <User />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/addUser">
              <AddUser />
            </Route>
            <Route exact path="/updateUser">
              <UpdateUser />
            </Route>
            <Route exact path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/resetPassword">
              <ResetPassword />
            </Route>
            <Widget />
          </Switch>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
