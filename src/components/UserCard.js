import { connect } from "react-redux";
import { formatDate } from "../utils/_DATA";
const UserCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <h3 className="center">{props.question.author}</h3>
      <p className="center">{formatDate(props.question.timestamp)}</p>
      <hr />
      <button className="card-btn">Show</button>
    </div>
  );
};

const mapStateToProps = ({ users }, props) => {
  // const user = users[props.userId];
  return {
    users,
  };
};

export default connect(mapStateToProps)(UserCard);
