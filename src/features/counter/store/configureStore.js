import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Redux
import counterReducer from "../reducers/counterReducer";
import appDataReducer from "../reducers/appDataReducer";

const configureStore = () => {
  const rootReducer = combineReducers({
    counterReducer,
    appDataReducer
  });

  const initialState = {};

  const middleware = [thunk];

  // To use Redux extension in browser
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export default configureStore;
