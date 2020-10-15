import { GET_URLS_LIST, FETCH_FAILED, ADD_URL } from './actionTypes';

/**
 * Загружает все объекты url в store
 * @return {type: string, payload: [{},...]} .
 */

export const getUrlLists = () => async (dispatch) => {
  const responce = await fetch('api/url/list');
  const result = await responce.json();
  try {
    return dispatch({
      type: GET_URLS_LIST,
      payload: result,
    });
  } catch (error) {
    console.log(error);
    return dispatch({ type: FETCH_FAILED, message: error });
  }
};

/**
 * Добавляет и формирует url в базу данных"
 * @param {string} url - адресс введенный пользователем в инпут.
 * @return {type: string, payload: {}} .
 */

export const addUrl = (url) => async (dispatch) => {
  const longLink = url.trim(); //  удалить пробелы
  const params = {
    method: 'POST',
    body: JSON.stringify({ longLink }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const responce = await fetch('api/url/shorten', params);
  const result = await responce.json();
  try {
    return dispatch({
      type: ADD_URL,
      payload: result,
    });
  } catch (error) {
    console.log(error);
    return dispatch({ type: FETCH_FAILED, message: error });
  }
};

// const submitLink = async (url) => {
//   const longLink = url.trim();
//   const params = {
//     method: 'POST',
//     body: JSON.stringify({ longLink }),
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   };
//   const responce = await fetch('api/url/shorten', params);
//   const result = await responce.json();
//   inputEl.current.value = result.shortUrl;
//   inputEl.current.focus();
//   setValueInput(result.shortUrl);
// };
