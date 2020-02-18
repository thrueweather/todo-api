import { filters } from "../actions/todo";

const filter = (state = filters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default filter