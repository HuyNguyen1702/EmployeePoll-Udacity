export const RECEIVE_USERS = "RECEIVE_USERS";

export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author,
  };
}
