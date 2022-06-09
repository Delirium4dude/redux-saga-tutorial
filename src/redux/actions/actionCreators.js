import { INCREASE, DECREASE, GET_NEWS, SET_NEWS } from "../constants";

export const increaseCount = () => ({
  type: INCREASE,
});

export const decreaseCount = () => ({
  type: DECREASE,
});

export const getLatestNews = () => ({
  type: GET_NEWS,
})

export const setLatestNews = (news) => ({
  type: SET_NEWS,
  payload: news
})