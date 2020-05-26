import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { getCounterSelector } from "../reducers/counterReducer";
import { setIncrease, setDecrease } from "../actions/counterActions";

const useCounter = () => {
  const dispatch = useDispatch();
  const counterData = useSelector(getCounterSelector);

  // We can create handlers there or directly in components using useDispatch hook
  const handleIncrease = useCallback(() => {
    dispatch(setIncrease());
  }, [dispatch]);

  const handleDecrease = useCallback(() => {
    dispatch(setDecrease());
  }, [dispatch]);

  return { counterData, handleIncrease, handleDecrease };
};

export default useCounter;
