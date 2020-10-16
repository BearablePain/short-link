/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { GET_URLS_LIST, ADD_URL, InterfaceUrlActionTypes } from './actionTypes';

const reducer = (state: any, action: InterfaceUrlActionTypes) => {
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
