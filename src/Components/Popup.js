import {useContext} from "react";
import { AuthContext } from "../hooks/AuthContext";

function Popup({user}) {
    const {togglePopup, deleteUser} = useContext(AuthContext)

  return (
    <div  onClick={() => togglePopup()} className="overlay">
      <div className="popup">
          <p>Are you sure you want to delete user?</p>
          <div className="confirm">
              <button  onClick={() => deleteUser(`/api/user/${user.id}`)} className="yes">Yes</button>
              <button  onClick={() => togglePopup()}>Cancel</button>
          </div>
          {/* <div className="close">
              <button onClick={() => togglePopup()}>Close</button>
          </div> */}
      </div>
    </div>
  );
}

export default Popup;
