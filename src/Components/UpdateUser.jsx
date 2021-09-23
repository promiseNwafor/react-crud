import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

function UpdateUser() {
  const {updateUser} = useContext(AuthContext)
  const [user, setUser] = useState(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);

  const location = useLocation();

  const data = {
    name: fullname,
    email,
    phone_no: phone,
  };

  useEffect(() => {
    setUser(location.state.user);
    console.log(user);
  }, [location.state.user, user]);

  return (
    <div className="Auth">
      <div className="Box">
        <div className="wrap">
          <div className="h4">
            <h4>Update User</h4>
          </div>
          <form>
            <div className="Input">
              <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                placeholder="Full name"
                type="text"
              />
            </div>
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                minlength="11"
                maxlength="11"
                type={"tel"}
              />
            </div>
          </form>
          <div className="Btn">
            <button
              onClick={() => updateUser(`/api/user/${user.id}`, data, "/")}
              type="submit"
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
