import { createSelector } from "reselect";

// Utils
import { FETCH_INIT_DATA } from "../types/appDataTypes";

const initialState = {
  data: {
    userId: ""
  }
};

const appDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INIT_DATA:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

// selectors
export const getAppDataSelector = createSelector(
  state => state.appDataReducer,
  appDataReducer => appDataReducer
);

export default appDataReducer;
