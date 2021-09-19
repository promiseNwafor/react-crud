import { useState } from "react";

function AddUser({ apiFetch }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [sex, setSex] = useState(null);
  const [age, setAge] = useState(null);
  const [role, setRole] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);

  const data = {
    name: fullname,
    email,
    phone_no: phone,
    password,
    sex,
    age,
    role,
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="Auth">
      <div className="Box">
        <div className="wrap">
          <div className="h4">
            <h4>Add new user</h4>
          </div>
          <form>
            <div className="Input">
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Name"
                minlength="3"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                minlength="7"
                type={passwordShown ? "text" : "password"}
              />
              <i
                className="fa fa-eye"
                aria-hidden="true"
                onClick={togglePasswordVisiblity}
              ></i>
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
            <div className="Input password">
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
                type={"number"}
              />
            </div>
            <div className="Input password">
              <input
                value="male"
                name="sex"
                onChange={(e) => setSex(e.target.value)}
                type="radio"
              />
              <label for="male">Male</label>
              <input
                value="female"
                name="sex"
                onChange={(e) => setSex(e.target.value)}
                type="radio"
              />
              <label for="female">Female</label>
            </div>
            <hr />
            <div className="Input password">
              <input
                value="Admin"
                name="role"
                onChange={(e) => setRole(e.target.value)}
                type="radio"
              />
              <label for="Admin">Admin</label>
              <input
                value="user"
                name="role"
                onChange={(e) => setRole(e.target.value)}
                type="radio"
              />
              <label for="user">User</label>
            </div>
          </form>

          <div className="Btn">
            <button
              onClick={() => apiFetch("/api/user", data, "/")}
              type="submit"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
