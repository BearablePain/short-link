import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputGroupAddon, Input, Button } from 'reactstrap';
import { addUrl } from '../../Redux/action';

const InputLink = () => {
  const [valueInput, setValueInput] = useState('');
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.url);
  useEffect(() => {
    setValueInput(result.shortUrl);
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
