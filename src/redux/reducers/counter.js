import { INCREASE, DECREASE } from "../constants";

const counter = ( state = { count: 10 }, { type }) => {
  switch (type) {
    case INCREASE: return { ...state, count: state.count + 1 };
    case DECREASE: return { ...state, count: state.count - 1 };
    default: return state;
  }
}

export default counter;
