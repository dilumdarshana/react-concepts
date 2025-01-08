import { INCREMENT, DECREMENT } from '../constants/action_types/counter';

const counter = (state: { count: number }, action: { type: string }) => {
  switch(action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
