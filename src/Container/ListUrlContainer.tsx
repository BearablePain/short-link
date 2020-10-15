import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListUrl from '../Components/ListUrl/ListUrl';
import { getUrlLists } from '../Redux/action';
import { interfaceStore, interfaceListUrl } from '../interface';

const ListUrlContainer = () => {
  const dataUrl = useSelector((state: interfaceStore) => state.dataUrl);
  const url = useSelector((state: interfaceStore) => state.url);
  const dispatch = useDispatch();
 
  // Загрузка данных в стор при внедрении этого компонента
  
  useEffect(() => {
    dispatch(getUrlLists());
  }, [dispatch, url]);


  return <>{dataUrl && <ListUrl dataUrl={dataUrl.reverse()} />}</>;
};

export default ListUrlContainer;
