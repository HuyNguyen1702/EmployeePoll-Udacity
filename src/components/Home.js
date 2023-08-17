import { connect } from "react-redux";
import UserCard from "./Card";
const Home = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div>
        <h3 className="center">New questions</h3>
        <div className="question-container">
          {props.userQuestionData.unanswered.map((question) => {
            return <UserCard key={question.id} question={question} />;
          })}
        </div>
      </div>

      <div>
        <h3 className="center">Done</h3>
        <div className="question-container">
          {props.userQuestionData.answered.map((question) => {
            return <UserCard key={question.id} question={question} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  const answeredIds = Object.keys(users[authedUser].answers);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    userQuestionData: {
      answered,
      unanswered,
    },
  };
};

export default connect(mapStateToProps)(Home);
