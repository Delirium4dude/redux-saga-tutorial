import { INCREASE, DECREASE } from "../constants";

export const increaseCount = () => ({
  type: INCREASE,
});

export const decreaseCount = () => ({
  type: DECREASE,
});
