/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListUrl from '../Components/ListUrl/ListUrl';
import { getUrlLists } from '../Redux/action';
import { interfaceStore } from '../interface';

const ListUrlContainer = () => {
  const dataUrl = useSelector((state: interfaceStore) => state.dataUrl);
  const url = useSelector((state: interfaceStore) => state.url);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUrlLists());
  }, [dispatch, url]);

  if (!dataUrl) {
    return <>Loading...</>;
  }
  return (
    <>
      <ListUrl dataUrl={dataUrl} />
    </>
  );
};

export default ListUrlContainer;
