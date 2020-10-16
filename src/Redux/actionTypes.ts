/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { interfaceUrlObject, interfaceListUrl } from '../interface';

export const GET_URLS_LIST = 'GET_URLS_LIST';
export const ADD_URL = 'ADD_URL';
export const SUBMIT_LONG_URL = 'SUBMIT_LONG_URL';
export const FETCH_FAILED = 'FETCH_FAILED';

 interface GetUrlListAction {
  type: typeof GET_URLS_LIST
  payload: interfaceListUrl
}

 interface AddUrlaction {
  type: typeof ADD_URL
  payload: interfaceUrlObject
}

export type InterfaceUrlActionTypes = GetUrlListAction | AddUrlaction
