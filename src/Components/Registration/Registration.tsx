import React from 'react';

import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';

const Registration = () => (
  <Form>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="Name" className="mr-sm-2">
        Name
      </Label>
      <Input type="text" name="text" id="exampleName" placeholder="Имя" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="exampleEmail" className="mr-sm-2">
        Email
      </Label>
      <Input
        type="email"
        name="email"
        id="exampleEmail"
        placeholder="something@idk.cool"
      />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="examplePassword" className="mr-sm-2">
        Password
      </Label>
      <Input
        type="password"
        name="password"
        id="examplePassword"
        placeholder="don't tell!"
      />
    </FormGroup>
  </Form>
);

export default Registration;
