import React from 'react';
import { InputGroupAddon, Input, Button } from 'reactstrap';
import useInput from '../../hooks/useInput';
// 4b91b6bbc4e44dd0a94b37f648edc49b

const InputLink = () => {
  const [valueInput, setValueInput] = useInput({
    longLink: '',
  });

  const submitLink = async (url) => {
    const params = {
      method: 'POST',
      body: JSON.stringify(url),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const responce = await fetch('api/url/shorten', params);
    const result = await responce.json();
    console.log(result);
  };
  return (
    <div>
      <InputGroupAddon
        addonType="append"
        style={{ justifyContent: 'center', padding: '20px' }}
      >
        <Input
          bsSize="lg"
          style={{ width: '60%' }}
          name="longLink"
          value={valueInput.longLink}
          onChange={setValueInput}
        />
        <Button color="secondary" onClick={() => submitLink(valueInput)}>
          Сократить
        </Button>
      </InputGroupAddon>
    </div>
  );
};

export default InputLink;
