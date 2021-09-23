import {createContext, useState, useEffect } from 'react';
import axios from "axios";

export const AuthContext = createContext();

const baseUrl = "https://rest-crudapi.herokuapp.com";
const token =
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0LWNydWRhcGkuaGVyb2t1YXBwLmNvbVwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTYzMjA3MTMwMCwiZXhwIjoxNjMyMDc0OTAwLCJuYmYiOjE2MzIwNzEzMDAsImp0aSI6ImlUa2dva2tDenkyWkJjRzgiLCJzdWIiOjkyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Xab32zemDT94Lgtp6g4i7Aa1ZC8Jsr396qvzksk7mMM";

const AuthContextProvider = props => {
  const [ user, setUser ] = useState(null)
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [popup, setPopup] = useState(false);

  const apiFetch = async (base, data, pathName) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await axios.post(`${baseUrl}${base}`, data, {
        headers: headers,
      });
      // setCurrentUser(res.config.data);
      // console.log(user);
      localStorage.setItem('user', res.config.data)
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
      setUser(null);
      localStorage.clear();
    window.location.replace("/login");
    //     console.log(users);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     console.log(error);
    //   });
  };

  const togglePopup = () => {
    setPopup(!popup)
  }

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

  const checkUser = () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(user);
    }
  }

  const value = {
    user,
    users,
    error,
    popup,
    deleteUser,
    apiFetch,
    updateUser,
    checkUser,
    logout,
    togglePopup
  }

  return (
    <AuthContext.Provider value={value}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;