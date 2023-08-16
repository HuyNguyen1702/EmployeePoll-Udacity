import { connect } from "react-redux";
const Leaderboard = (props) => {
  console.log(props);
  return <div>LeaderBoard</div>;
};

const mapStateToProps = ({ questions }) => {
  //   const sortQuestion = questions.sort(
  //     (a, b) => questions[a].answers.length - questions[b].answers.length
  //   );

  return {
    questions,
  };
};

export default connect(mapStateToProps)(Leaderboard);
