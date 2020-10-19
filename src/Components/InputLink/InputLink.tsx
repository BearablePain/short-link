/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  InputGroupAddon,
  Input,
  Button,
  UncontrolledTooltip,
} from 'reactstrap';

import CopyToClipboard from 'react-copy-to-clipboard';

import { interfaceStore } from '../../interface';
import { addUrl } from '../../Redux/action';

const InputLink = () => {
  const [valueInput, setValueInput] = useState<any>('');
  const [activeButtonCopy, setActiveButtonCopy] = useState<boolean>(false);

  const dispatch = useDispatch();
  const result = useSelector((state: interfaceStore) => state.url);

  // Если пользователь нажал кнопку 'Сократить' заполняем инпут коротким URL
  useEffect(() => {
    if (result !== undefined) {
      setValueInput(result.shortUrl);
    }
  }, [result]);

  // Отслеживаем кнопку копирования, если нажал то меняем надпись на 'скопированно' на 1.2 секунды
  useEffect(() => {
    if (activeButtonCopy) {
      setTimeout(() => setActiveButtonCopy((state) => state === false), 1200);
    }
  }, [activeButtonCopy]);

  return (
    <div>
      <InputGroupAddon
        addonType="append"
        style={{ justifyContent: 'center', padding: '20px' }}
      >
        <Input
          autoFocus
          bsSize="lg"
          style={{ width: '60%' }}
          name="longLink"
          value={valueInput || ''}
          onChange={(e) => setValueInput(e.target.value)}
        />

        <CopyToClipboard text={valueInput}>
          <Button
            style={{ marginRight: '10px' }}
            id="buttonCopy"
            color="primary"
            onClick={() => {
              setActiveButtonCopy((state) => state === false);
            }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-back"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <UncontrolledTooltip placement="top" target="buttonCopy">
                {!activeButtonCopy ? (
                  'Скопировать'
                ) : (
                  <span style={{ color: 'green' }}>Скопированно</span>
                )}
              </UncontrolledTooltip>
              <path
                fillRule="evenodd"
                d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
              />
            </svg>
          </Button>
        </CopyToClipboard>

        <Button
          color="secondary"
          onClick={() => {
            dispatch(addUrl(valueInput));
          }}
        >
          Сократить
        </Button>
      </InputGroupAddon>
    </div>
  );
};

export default InputLink;
