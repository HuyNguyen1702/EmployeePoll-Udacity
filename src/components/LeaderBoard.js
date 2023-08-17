import { connect } from "react-redux";

const Leaderboard = (props) => {
  const { leaderboardData } = props;
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
          {leaderboardData.map((val, key) => {
            return (
              <tr key={key}>
                <td>
                  <img src={val.avatarURL} alt="" className="avatar" />
                  <div>
                    {val.name}
                    <br />
                    {val.id}
                  </div>
                </td>
                <td>{val.answerCount}</td>
                <td>{val.questionCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const leaderboardData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
    }))
    .sort((a, b) => b.answerCount - a.answerCount);
  return {
    leaderboardData,
  };
};

export default connect(mapStateToProps)(Leaderboard);
