import { connect } from "react-redux";
import { useState } from "react";
import { handleSaveQuestion } from "../actions/questions";

const NewPoll = ({ authedUser, dispatch }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const btnDisabled = optionOne === "" || optionTwo === "";

  const handleOptionOneChange = (e) => {
    setOptionOne(e.target.value);
  };

  const handleOptionTwoChange = (e) => {
    setOptionTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser));

    setOptionOne("");
    setOptionTwo("");
  };

  return (
    <div className="container">
      <h3 className="center">Would You Rather</h3>
      <p className="center">Create Your Own Poll</p>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <label htmlFor="" className="center">
          First Option
        </label>
        <input
          type="text"
          placeholder="Optione One"
          className="input"
          id="optionOne"
          onChange={handleOptionOneChange}
          value={optionOne}
        />
        <label htmlFor="" className="center">
          Second Option
        </label>
        <input
          type="text"
          placeholder="Optione Two"
          className="input"
          id="optionTwo"
          onChange={handleOptionTwoChange}
          value={optionTwo}
        />
        <button className="btn" disabled={btnDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewPoll);
