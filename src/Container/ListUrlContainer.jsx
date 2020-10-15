import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListUrl from '../Components/ListUrl/ListUrl';
import { getUrlLists } from '../Redux/action';

const ListUrlContainer = () => {
  const [data, setData] = useState([]);
  const dataUrl = useSelector((state) => state.dataUrl);

  const dispatch = useDispatch();

  // Загрузка данных в стор при внедрении этого компонента

  // useEffect(() => {
  //   // if (data.length < dataUrl.length && data.length === 0) {
  //   dispatch(getUrlLists());
  //   setData(dataUrl)
  //   // }
  // }, [dispatch]);
  const memoizedCallback = useCallback(() => {
    dispatch(getUrlLists());
    setData(dataUrl);
  }, [dataUrl]);
  useEffect(() => {
    // if (data.length < dataUrl.length && data.length === 0) {
    memoizedCallback();
    // }
  }, [dispatch]);

  return (
    <>
      <ListUrl dataUrl={dataUrl.reverse()} />
    </>
  );
};

export default ListUrlContainer;
