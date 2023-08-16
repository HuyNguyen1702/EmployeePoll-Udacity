import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import Leaderboard from "./LeaderBoard";
const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className="App">
        {props.authedUser === null ? (
          <Login />
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
