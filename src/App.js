import axios from "axios";
import { useState, useEffect } from "react";
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

const baseUrl = "https://rest-crudapi.herokuapp.com";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0LWNydWRhcGkuaGVyb2t1YXBwLmNvbVwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTYzMjA3MTMwMCwiZXhwIjoxNjMyMDc0OTAwLCJuYmYiOjE2MzIwNzEzMDAsImp0aSI6ImlUa2dva2tDenkyWkJjRzgiLCJzdWIiOjkyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Xab32zemDT94Lgtp6g4i7Aa1ZC8Jsr396qvzksk7mMM";

function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  const apiFetch = async (base, data, pathName) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      await axios.post(`${baseUrl}${base}`, data, {
        headers: headers,
      });
      window.location.replace(pathName);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  const deleteUser = async (base) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const users = await axios.delete(`${baseUrl}${base}`, {
        headers: headers,
      });
      setUsers(users);
      window.location.replace("/");
      console.log(users);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  const updateUser = async (base, data) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const users = await axios.put(`${baseUrl}${base}`, data, {
        headers: headers,
      });
      setUsers(users);
      window.location.replace("/");
      console.log(users);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  const logout = () => {
    // const headers = {
    //   Authorization: `Bearer ${token}`
    // }

    // return axios
    //   .post(`https://rest-crudapi.herokuapp.com/api/auth/logout`, { headers: headers })
    //   .then((users) => {
    window.location.replace("/login");
    //     console.log(users);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    return axios.get(`https://rest-crudapi.herokuapp.com/api/user`)
    .then((data) => {
      setUsers(data)
    })
    .catch((err) => {
      setError(err);
      console.log(error);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {window.location.pathname !== "/login" && <Nav logout={logout} />}
        <Switch>
          <Route exact path="/">
            <Users
              users={users}
              updateUser={updateUser}
              deleteUser={deleteUser}
            />
          </Route>
          <Route exact path="/user/:id">
            <User deleteUser={deleteUser} updateUser={updateUser} />
          </Route>
          <Route exact path="/signup">
            <Signup apiFetch={apiFetch} />
          </Route>
          <Route exact path="/login">
            <Login apiFetch={apiFetch} />
          </Route>
          <Route exact path="/addUser">
            <AddUser apiFetch={apiFetch} />
          </Route>
          <Route exact path="/updateUser">
            <UpdateUser updateUser={updateUser} />
          </Route>
          <Route exact path="/forgotPassword">
            <ForgotPassword apiFetch={apiFetch} />
          </Route>
          <Route exact path="/resetPassword">
            <ResetPassword apiFetch={apiFetch} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
