import { SET_NEWS } from '../constants';

const initialState = {
  latestNews: []
};

const news = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEWS:
      return {
        ...state,
        latestNews: [...state.latestNews, ...payload]
      }
    default: return state;
  }
}

export default news;