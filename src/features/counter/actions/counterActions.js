import { INCREASE, DECREASE } from "../types/counterTypes";

const setIncrease = () => ({
  type: INCREASE
});

const setDecrease = () => ({
  type: DECREASE
});

export { setIncrease, setDecrease };
