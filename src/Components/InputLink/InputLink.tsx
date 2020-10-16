/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputGroupAddon, Input, Button } from 'reactstrap';
import { interfaceStore } from '../../interface';
import { addUrl } from '../../Redux/action';

const InputLink = () => {
  const [valueInput, setValueInput] = useState<string | undefined>('');
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const result = useSelector((state: interfaceStore) => state.url);

  useEffect(() => {
    if (result !== undefined) {
      setValueInput(result.shortUrl);
    }
  }, [result]);

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
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          ref={inputEl}
        />
        <Button
          color="secondary"
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            valueInput && dispatch(addUrl(valueInput));
          }}
        >
          Сократить
        </Button>
      </InputGroupAddon>
    </div>
  );
};

export default InputLink;
