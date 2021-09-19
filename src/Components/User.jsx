import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function User({ deleteUser }) {
  const [user, setUser] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setUser(location.state.user);
  }, [location.state.user]);

  return (
    <div className="Cover">
      <div className="Wrap">
        <div className="Analytics">
          <div className="wrap">
            <div className="head">
              <h3>All Users</h3>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {user && (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone_no}</td>
                    <td>{user.sex}</td>
                    <td>{user.age}</td>
                    <td>{user.role}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="sec">
              <p
                onClick={() => {
                  deleteUser(`/api/user/${user.id}`);
                }}
              >
                Delete user
              </p>
              <p>
                <Link
                  to={{
                    pathname: `/updateUser`,
                    state: { user },
                  }}
                >
                  Update user
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
