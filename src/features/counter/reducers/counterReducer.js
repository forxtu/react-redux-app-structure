import { createSelector } from "reselect";

// Utils
import { INCREASE, DECREASE } from "../types/counterTypes";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

// Selectors
// reselect is a cool lib to momoize selectors
// https://github.com/reduxjs/reselect
export const getCounterSelector = createSelector(
  state => state.counterReducer,
  counterReducer => counterReducer
);

export default counterReducer;
