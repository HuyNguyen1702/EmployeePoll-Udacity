import { connect } from "react-redux";
import { setAuthUser } from "../actions/authedUser";
import { useState } from "react";
const Login = ({ users, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState({});

  const handleDropdown = (e) => {
    let obj = JSON.parse(e.target.value);
    setSelectedUser(obj);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthUser(selectedUser));
  };

  return (
    <div>
      <h3 className="center">Employee Poll</h3>

      <h3 className="center">Login</h3>

      <form className="new-tweet" onSubmit={handleLogin}>
        <select value={selectedUser} onChange={handleDropdown}>
          {users.map((user, index) => {
            return (
              <option key={index} value={JSON.stringify(user)}>
                {user.name}
              </option>
            );
          })}
        </select>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(Login);
