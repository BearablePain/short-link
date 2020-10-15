import { GET_URLS_LIST, ADD_URL } from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case GET_URLS_LIST:
      return {
        ...state,
        dataUrl: action.payload,
      };
    case ADD_URL:
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
