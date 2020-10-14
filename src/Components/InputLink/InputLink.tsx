import React from 'react';
import { InputGroupAddon, Input, Button } from 'reactstrap';

const InputLink = () => (
  <div>
    <InputGroupAddon
      addonType="append"
      style={{ justifyContent: 'center', padding: '20px' }}
    >
      <Input bsSize="lg" style={{ width: '60%' }} />
      <Button color="secondary">Сократить</Button>
    </InputGroupAddon>
  </div>
);
export default InputLink;
