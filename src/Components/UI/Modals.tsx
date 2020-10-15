import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import Auth from '../Auth/Auth';
import Registration from '../Registration/Registration';

interface Props {
  modal: boolean;
  modalContent?: string;
  toggle: () => void;
}

const Modals = (props: Props) => (
  <div>
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        {props.modalContent === 'auth' ? 'Войти' : 'Зарегестрироваться'}
      </ModalHeader>
      <ModalBody>
        {props.modalContent === 'auth' ? <Auth /> : <Registration />}
      </ModalBody>
      <ModalFooter>
        <Button color="success">Submit</Button>
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default Modals;
