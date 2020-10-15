import React, { useRef, useState } from 'react';
import { InputGroupAddon, Input, Button } from 'reactstrap';

const InputLink = () => {
  const [valueInput, setValueInput] = useState('');
  const inputEl = useRef(null);

  const submitLink = async (longLink) => {
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
    inputEl.current.value = result.shortUrl;
    inputEl.current.focus();
    setValueInput(result.shortUrl);
  };

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
            submitLink(valueInput);
          }}
        >
          Сократить
        </Button>
      </InputGroupAddon>
    </div>
  );
};

export default InputLink;
