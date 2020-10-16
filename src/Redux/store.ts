/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { interfaceStore } from '../interface';

//  формирование хранилища

export const initialStore: interfaceStore = { url: {}, dataUrl: [] };

const middleware = [thunk, logger];
const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
