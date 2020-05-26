import React from "react";
import { Provider } from "react-redux";

// Redux
import configureStore from "../store/configureStore";

// Components
import Header from "../components/Header";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Header />
      <Counter />
    </Provider>
  );
};

export default CounterContainer;
