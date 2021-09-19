import { useState } from "react";
import { Link } from "react-router-dom";

function Users({ users, deleteUser }) {
  const [hide, setHide] = useState(true);

  return (
    <div className="Cover">
      <div className="Wrap">
        <div className="Analytics">
          <div className="wrap">
            <div className="head">
              <h3>All Users</h3>
            </div>

            {!users ? (
              <h2>Loading users</h2>
            ) : (
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
                  {users.data &&
                    users.data.map((user) => {
                      return (
                        <tr
                          onMouseOver={() => setHide(false)}
                          onMouseOut={() => setHide(true)}
                          key={user.id}
                        >
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phone_no}</td>
                          <td>{user.sex}</td>
                          <td>{user.age}</td>
                          <td>{user.role}</td>
                          <td>
                            <p className={hide && "hide"}>
                              <Link
                                to={{
                                  pathname: `/user/${user.id}`,
                                  state: { user },
                                }}
                              >
                                <i className="fa fa-eye" aria-hidden="true"></i>
                              </Link>
                            </p>
                          </td>
                          <td>
                            <p className={hide && "hide"}>
                              <Link
                                to={{
                                  pathname: `/updateUser`,
                                  state: { user },
                                }}
                              >
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </p>
                          </td>
                          <td>
                            <p
                              onClick={() => {
                                deleteUser(`/api/user/${user.id}`);
                              }}
                              className={hide && "hide"}
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
