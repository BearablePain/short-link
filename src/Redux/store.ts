import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer';

//  формирование хранилища

const initialStore = { dataUrl: [], url: {} };
const middleware = [thunk, logger];
const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
