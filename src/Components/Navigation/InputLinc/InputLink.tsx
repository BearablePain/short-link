import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const InputLink = () => {
  return (
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
};

export default InputLink;
