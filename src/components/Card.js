import { connect } from "react-redux";
import { formatDate } from "../utils/_DATA";
const Card = (props) => {
  return (
    <div className="card">
      <h3 className="center">{props.question.author}</h3>
      <p className="center">{formatDate(props.question.timestamp)}</p>
      <hr />
      <button className="card-btn">Show</button>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Card);
