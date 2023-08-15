import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authedUser";
const Navbar = ({ authedUser, dispatch }) => {
  const handleLogout = () => {
    dispatch(setAuthUser(null));
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
        </ul>
      </nav>

      <nav className="nav">
        <ul>
          <li>{authedUser.name}</li>
          <li onClick={handleLogout}>Log out</li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Navbar);
